
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/justin/tutorial/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/justin/tutorial/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/justin/tutorial/src/pages/about.js")),
  "component---src-pages-company-history-js": preferDefault(require("/home/justin/tutorial/src/pages/company/history.js")),
  "component---src-pages-company-index-js": preferDefault(require("/home/justin/tutorial/src/pages/company/index.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/justin/tutorial/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/justin/tutorial/src/pages/index.js")),
  "component---src-pages-recipes-js": preferDefault(require("/home/justin/tutorial/src/pages/recipes.js")),
  "component---src-pages-tags-js": preferDefault(require("/home/justin/tutorial/src/pages/tags.js"))
}

