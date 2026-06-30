# Zhao Yuxuan SEO Max deployment package

Generated: 2026-06-30

## What changed
- Replaced query-parameter language switching with crawlable static URLs: `/`, `/zh/`, `/ja/`.
- Added 5 independent project case-study URLs in all 3 languages.
- Added self-referencing canonical tags, reciprocal hreflang, unique titles/descriptions, ProfilePage/Person/TechArticle/CollectionPage/Breadcrumb structured data, image annotations, and internal links.
- Added responsive images, dimensions, lazy loading, reduced-motion support, lower-cost canvas animation, and deferred scripts.
- Added sitemap, robots.txt, llms.txt, IndexNow, Baidu API submission, URL checks, GitHub/LinkedIn copy, and a 30-day distribution plan.

## Deploy
1. Back up the existing site.
2. Upload the contents of this folder to the document root. Preserve the directory structure. Keep `google1006d50f305a5b9f.html` at the root for Google ownership verification.
3. Configure the 301 redirects in `HOSTING_HEADERS_AND_REDIRECTS.md`.
4. Confirm these URLs return HTTP 200:
   - `https://zhao.hiyeup.com/`
   - `https://zhao.hiyeup.com/zh/`
   - `https://zhao.hiyeup.com/ja/`
   - `https://zhao.hiyeup.com/projects/`
   - `https://zhao.hiyeup.com/sitemap.xml`
5. Run `npm run check` after deployment.
6. Submit the sitemap to Google, Bing, and Baidu.
7. Run `npm run submit:indexnow`. For Baidu, run `BAIDU_TOKEN=your_token npm run submit:baidu`.

## Important
No implementation can guarantee a particular ranking. The package maximizes controllable technical, content-structure, entity, crawl, speed, and distribution signals. Ranking gains still depend on time, query competition, content usefulness, and legitimate external mentions/links.
