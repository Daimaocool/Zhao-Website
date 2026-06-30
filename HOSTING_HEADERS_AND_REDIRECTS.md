# Hosting rules to configure

## Permanent language redirects
Configure these at your CDN or web server so the old query URLs stop competing with the clean language URLs:

- `/?lang=en` → `/` (301)
- `/?lang=zh` → `/zh/` (301)
- `/?lang=ja` → `/ja/` (301)

### Nginx example
```nginx
if ($arg_lang = zh) { return 301 /zh/; }
if ($arg_lang = ja) { return 301 /ja/; }
if ($arg_lang = en) { return 301 /; }
```

## Cache headers
- HTML, XML, robots.txt, llms.txt: `Cache-Control: public, max-age=0, must-revalidate`
- Versioned CSS/JS and files under `/assets/`: `Cache-Control: public, max-age=31536000, immutable`
- Enable Brotli or gzip for HTML, CSS, JS, XML, JSON, SVG and TXT.

## Recommended security headers
```text
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), camera=(), microphone=()
```

Do not block verified search crawlers with a CDN bot challenge.
