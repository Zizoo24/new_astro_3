#!/bin/bash
#
# OnlineTranslation.ae - 404 Link Scanner
# Comprehensive website health check for broken links and redirects
#
# Usage:
#   chmod +x scripts/scan-404s.sh
#   ./scripts/scan-404s.sh
#
# Optional parameters:
#   --url <url>        Base URL to scan (default: https://new-astro-3.vercel.app)
#   --verbose          Show all successful links
#   --quick            Skip sitemap and crawling (faster)
#

set -e

# Configuration
BASE_URL="${SCAN_URL:-https://new-astro-3.vercel.app}"
VERBOSE=false
QUICK=false
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
OUTPUT_DIR="scan-results/404-scan-$TIMESTAMP"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --url)
      BASE_URL="$2"
      shift 2
      ;;
    --verbose)
      VERBOSE=true
      shift
      ;;
    --quick)
      QUICK=true
      shift
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Header
echo ""
echo "================================================"
echo "  OnlineTranslation.ae - 404 Link Scanner"
echo "================================================"
echo "Started: $(date)"
echo "Base URL: $BASE_URL"
echo "Output: $OUTPUT_DIR/"
echo ""

# ============================================
# STEP 1: Extract from navigation.ts
# ============================================
echo -e "${BLUE}[1/6]${NC} Extracting links from navigation.ts..."

if [ -f "src/data/navigation.ts" ]; then
  grep -oE "href: '[^']*'" src/data/navigation.ts | \
    sed "s/href: '//g" | sed "s/'//g" | \
    grep "^/" | sort -u > "$OUTPUT_DIR/nav_links.txt"
  NAV_COUNT=$(wc -l < "$OUTPUT_DIR/nav_links.txt")
  echo "  ✓ Found $NAV_COUNT links from navigation.ts"
else
  echo "  ⚠ navigation.ts not found at src/data/navigation.ts"
  touch "$OUTPUT_DIR/nav_links.txt"
  NAV_COUNT=0
fi

# ============================================
# STEP 2: Fetch homepage
# ============================================
echo -e "${BLUE}[2/6]${NC} Fetching and parsing homepage..."

curl -sL "$BASE_URL/" > "$OUTPUT_DIR/homepage.html" 2>/dev/null || {
  echo -e "${RED}  ✗ Failed to fetch homepage${NC}"
  exit 1
}

grep -oE 'href="(/[^"]*)"' "$OUTPUT_DIR/homepage.html" | \
  sed 's/href="//g' | sed 's/"//g' | \
  grep "^/" | \
  grep -vE '\.(css|js|png|jpg|jpeg|webp|svg|gif|ico|woff|woff2|ttf|xml|json|webmanifest)$' | \
  sort -u > "$OUTPUT_DIR/homepage_links.txt"

HOMEPAGE_COUNT=$(wc -l < "$OUTPUT_DIR/homepage_links.txt")
echo "  ✓ Found $HOMEPAGE_COUNT page links on homepage"

# ============================================
# STEP 3: Crawl key pages (unless --quick)
# ============================================
if [ "$QUICK" = false ]; then
  echo -e "${BLUE}[3/6]${NC} Crawling key pages for additional links..."

  KEY_PAGES=(
    "/"
    "/legal-translation-dubai/"
    "/personal-documents/"
    "/services/attestation/"
    "/specialized-translation/"
    "/locations/"
    "/resources/"
    "/contact/"
    "/about/"
  )

  > "$OUTPUT_DIR/crawled_links.txt"

  for page in "${KEY_PAGES[@]}"; do
    curl -sL "$BASE_URL$page" 2>/dev/null | \
      grep -oE 'href="(/[^"]*)"' | \
      sed 's/href="//g' | sed 's/"//g' | \
      grep "^/" >> "$OUTPUT_DIR/crawled_links.txt" || true
  done

  cat "$OUTPUT_DIR/crawled_links.txt" | \
    grep -vE '\.(css|js|png|jpg|jpeg|webp|svg|gif|ico|woff|woff2|ttf|xml|json|webmanifest)$' | \
    sort -u > "$OUTPUT_DIR/crawled_links_clean.txt"

  CRAWLED_COUNT=$(wc -l < "$OUTPUT_DIR/crawled_links_clean.txt")
  echo "  ✓ Found $CRAWLED_COUNT links from crawling"
else
  echo -e "${BLUE}[3/6]${NC} Skipping crawl (--quick mode)"
  touch "$OUTPUT_DIR/crawled_links_clean.txt"
  CRAWLED_COUNT=0
fi

# ============================================
# STEP 4: Check sitemap (unless --quick)
# ============================================
if [ "$QUICK" = false ]; then
  echo -e "${BLUE}[4/6]${NC} Checking sitemap..."

  curl -sL "$BASE_URL/sitemap-0.xml" > "$OUTPUT_DIR/sitemap.xml" 2>/dev/null || true
  
  if [ -s "$OUTPUT_DIR/sitemap.xml" ]; then
    grep -oE '<loc>[^<]+</loc>' "$OUTPUT_DIR/sitemap.xml" | \
      sed 's|<loc>||g' | sed 's|</loc>||g' | \
      sed "s|$BASE_URL||g" | \
      sed 's|https://onlinetranslation.ae||g' | \
      grep "^/" | sort -u > "$OUTPUT_DIR/sitemap_links.txt"
    SITEMAP_COUNT=$(wc -l < "$OUTPUT_DIR/sitemap_links.txt")
    echo "  ✓ Found $SITEMAP_COUNT URLs in sitemap"
  else
    echo "  ⚠ Sitemap not accessible"
    touch "$OUTPUT_DIR/sitemap_links.txt"
    SITEMAP_COUNT=0
  fi
else
  echo -e "${BLUE}[4/6]${NC} Skipping sitemap (--quick mode)"
  touch "$OUTPUT_DIR/sitemap_links.txt"
  SITEMAP_COUNT=0
fi

# ============================================
# STEP 5: Combine and deduplicate
# ============================================
echo -e "${BLUE}[5/6]${NC} Combining all unique links..."

cat "$OUTPUT_DIR/nav_links.txt" \
    "$OUTPUT_DIR/homepage_links.txt" \
    "$OUTPUT_DIR/crawled_links_clean.txt" \
    "$OUTPUT_DIR/sitemap_links.txt" | \
  sort -u > "$OUTPUT_DIR/all_links.txt"

TOTAL_COUNT=$(wc -l < "$OUTPUT_DIR/all_links.txt")
echo "  ✓ Total unique URLs to test: $TOTAL_COUNT"
echo ""

# ============================================
# STEP 6: Test all links
# ============================================
echo -e "${BLUE}[6/6]${NC} Testing all links against $BASE_URL..."
echo "  (Testing $TOTAL_COUNT URLs - this may take a few minutes)"
echo ""

PASSED=0
FAILED=0
REDIRECT=0
TIMEOUT=0
ERROR_5XX=0

> "$OUTPUT_DIR/200_success.txt"
> "$OUTPUT_DIR/404_not_found.txt"
> "$OUTPUT_DIR/3xx_redirects.txt"
> "$OUTPUT_DIR/5xx_errors.txt"
> "$OUTPUT_DIR/timeouts.txt"

COUNTER=0
while IFS= read -r link; do
  ((COUNTER++))
  
  # Progress indicator
  if [ $((COUNTER % 10)) -eq 0 ]; then
    echo -ne "\r  Progress: $COUNTER/$TOTAL_COUNT"
  fi
  
  status=$(curl -s -o /dev/null -w "%{http_code}" --max-time 8 "$BASE_URL$link" 2>/dev/null)
  
  case "$status" in
    200)
      echo "$link" >> "$OUTPUT_DIR/200_success.txt"
      ((PASSED++))
      [ "$VERBOSE" = true ] && echo -e "${GREEN}✓${NC} $link"
      ;;
    301|302|303|307|308)
      echo "$status: $link" >> "$OUTPUT_DIR/3xx_redirects.txt"
      ((REDIRECT++))
      echo -e "\r  ${YELLOW}→ $status:${NC} $link"
      ;;
    404|410)
      echo "$status: $link" >> "$OUTPUT_DIR/404_not_found.txt"
      ((FAILED++))
      echo -e "\r  ${RED}✗ $status:${NC} $link"
      ;;
    500|502|503|504)
      echo "$status: $link" >> "$OUTPUT_DIR/5xx_errors.txt"
      ((ERROR_5XX++))
      echo -e "\r  ${RED}⚠ $status:${NC} $link"
      ;;
    000)
      echo "$link" >> "$OUTPUT_DIR/timeouts.txt"
      ((TIMEOUT++))
      echo -e "\r  ${YELLOW}⏱ TIMEOUT:${NC} $link"
      ;;
    *)
      echo "$status: $link" >> "$OUTPUT_DIR/404_not_found.txt"
      ((FAILED++))
      echo -e "\r  ${RED}? $status:${NC} $link"
      ;;
  esac
done < "$OUTPUT_DIR/all_links.txt"

echo -e "\r  Progress: $TOTAL_COUNT/$TOTAL_COUNT ✓"
echo ""

# ============================================
# RESULTS SUMMARY
# ============================================
echo ""
echo "================================================"
echo "  RESULTS SUMMARY"
echo "================================================"

# Calculate health score
HEALTH_SCORE=$(awk "BEGIN {printf \"%.1f\", ($PASSED/$TOTAL_COUNT)*100}")

echo -e "${GREEN}✓ Success (200):${NC}     $PASSED / $TOTAL_COUNT ($HEALTH_SCORE%)"
echo -e "${RED}✗ Not Found (404):${NC}   $FAILED"
echo -e "${RED}⚠ Server Errors (5xx):${NC} $ERROR_5XX"
echo -e "${YELLOW}→ Redirects (3xx):${NC}   $REDIRECT"
echo -e "${YELLOW}⏱ Timeouts:${NC}          $TIMEOUT"
echo ""

# Overall health assessment
if [ $FAILED -eq 0 ] && [ $ERROR_5XX -eq 0 ]; then
  echo -e "${GREEN}✓ SITE HEALTH: EXCELLENT${NC}"
elif [ $FAILED -lt 5 ] && [ $ERROR_5XX -lt 3 ]; then
  echo -e "${YELLOW}⚠ SITE HEALTH: GOOD (minor issues)${NC}"
else
  echo -e "${RED}✗ SITE HEALTH: NEEDS ATTENTION${NC}"
fi
echo ""

# ============================================
# GENERATE MARKDOWN REPORT
# ============================================
cat > "$OUTPUT_DIR/REPORT.md" << REPORT
# 404 Link Scan Report — OnlineTranslation.ae

**Date:** $(date)  
**Base URL:** \`$BASE_URL\`  
**Total URLs Tested:** $TOTAL_COUNT  
**Health Score:** $HEALTH_SCORE% ✓

---

## Executive Summary

| Status | Count | Percentage |
|--------|-------|------------|
| ✓ Success (200) | $PASSED | $HEALTH_SCORE% |
| ✗ Not Found (404) | $FAILED | $(awk "BEGIN {printf \"%.1f\", ($FAILED/$TOTAL_COUNT)*100}")% |
| ⚠ Server Errors (5xx) | $ERROR_5XX | $(awk "BEGIN {printf \"%.1f\", ($ERROR_5XX/$TOTAL_COUNT)*100}")% |
| → Redirects (3xx) | $REDIRECT | $(awk "BEGIN {printf \"%.1f\", ($REDIRECT/$TOTAL_COUNT)*100}")% |
| ⏱ Timeouts | $TIMEOUT | $(awk "BEGIN {printf \"%.1f\", ($TIMEOUT/$TOTAL_COUNT)*100}")% |

---

## 🔴 404 Errors (Not Found)

$(if [ -s "$OUTPUT_DIR/404_not_found.txt" ]; then
  echo ""
  echo "**Total:** $FAILED errors"
  echo ""
  echo "\`\`\`"
  cat "$OUTPUT_DIR/404_not_found.txt"
  echo "\`\`\`"
  echo ""
  echo "### Action Required"
  echo "1. Fix broken links in \`src/data/navigation.ts\`"
  echo "2. Create missing pages or remove references"
  echo "3. Add redirects to \`vercel.json\` if appropriate"
else
  echo "**No 404 errors found! ✓**"
fi)

---

## 🟡 Server Errors (5xx)

$(if [ -s "$OUTPUT_DIR/5xx_errors.txt" ]; then
  echo ""
  echo "**Total:** $ERROR_5XX errors"
  echo ""
  echo "\`\`\`"
  cat "$OUTPUT_DIR/5xx_errors.txt"
  echo "\`\`\`"
  echo ""
  echo "### Possible Causes"
  echo "- Vercel cold starts (503 errors)"
  echo "- Edge function timeouts"
  echo "- Deployment issues"
else
  echo "**No server errors found! ✓**"
fi)

---

## ⚠️ Redirects (3xx)

$(if [ -s "$OUTPUT_DIR/3xx_redirects.txt" ]; then
  echo ""
  echo "**Total:** $REDIRECT redirects"
  echo ""
  echo "\`\`\`"
  cat "$OUTPUT_DIR/3xx_redirects.txt"
  echo "\`\`\`"
  echo ""
  echo "### Review Recommendations"
  echo "- Check if these are intentional (configured in \`vercel.json\`)"
  echo "- Update navigation links to point directly to final destination"
  echo "- Verify redirect chains don't exceed 2 hops"
else
  echo "**No redirects found.**"
fi)

---

## ⏱️ Timeouts

$(if [ -s "$OUTPUT_DIR/timeouts.txt" ]; then
  echo ""
  echo "**Total:** $TIMEOUT timeouts"
  echo ""
  echo "\`\`\`"
  cat "$OUTPUT_DIR/timeouts.txt"
  echo "\`\`\`"
  echo ""
  echo "### Recommended Actions"
  echo "- Retry these URLs manually"
  echo "- Check Vercel function logs"
  echo "- Investigate slow queries or builds"
else
  echo "**No timeouts.**"
fi)

---

## 📊 Source Breakdown

| Source | URLs Found |
|--------|-----------|
| Navigation.ts | $NAV_COUNT |
| Homepage | $HOMEPAGE_COUNT |
| Crawled Pages | $CRAWLED_COUNT |
| Sitemap | $SITEMAP_COUNT |
| **Total Unique** | **$TOTAL_COUNT** |

---

## 📁 Files Generated

| File | Description |
|------|-------------|
| \`all_links.txt\` | All unique URLs tested |
| \`200_success.txt\` | Successfully loaded pages ($PASSED) |
| \`404_not_found.txt\` | 404 errors ($FAILED) |
| \`3xx_redirects.txt\` | Redirect chains ($REDIRECT) |
| \`5xx_errors.txt\` | Server errors ($ERROR_5XX) |
| \`timeouts.txt\` | Timed out requests ($TIMEOUT) |

---

*Report generated by scripts/scan-404s.sh*  
*Completed: $(date)*
REPORT

echo "Full report saved to:"
echo "  $OUTPUT_DIR/REPORT.md"
echo ""

# Display critical errors
if [ $FAILED -gt 0 ]; then
  echo -e "${RED}=== 404 ERRORS FOUND ===${NC}"
  cat "$OUTPUT_DIR/404_not_found.txt"
  echo ""
fi

if [ $ERROR_5XX -gt 0 ]; then
  echo -e "${RED}=== SERVER ERRORS FOUND ===${NC}"
  cat "$OUTPUT_DIR/5xx_errors.txt"
  echo ""
fi

if [ $REDIRECT -gt 0 ] && [ $REDIRECT -lt 10 ]; then
  echo -e "${YELLOW}=== REDIRECTS FOUND ===${NC}"
  cat "$OUTPUT_DIR/3xx_redirects.txt"
  echo ""
fi

# Exit code based on results
if [ $FAILED -gt 0 ] || [ $ERROR_5XX -gt 0 ]; then
  echo -e "${RED}✗ Scan completed with errors${NC}"
  exit 1
else
  echo -e "${GREEN}✓ Scan completed successfully!${NC}"
  exit 0
fi
