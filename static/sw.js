importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.335c63d6961c1d79a78a.js",
    "revision": "360c795ad565fb143138e4114c09dfe3"
  },
  {
    "url": "/_nuxt/layouts_default.6a3ee23716bbb9077b46.js",
    "revision": "16d8c8986df3f40a1c409d9fa26f5154"
  },
  {
    "url": "/_nuxt/layouts_public.1a5cbf183afdb034a354.js",
    "revision": "43d73a11ca1e17f2db40c1a85989618f"
  },
  {
    "url": "/_nuxt/manifest.5f1d10da66638eb4d0e9.js",
    "revision": "994b23c84b90652e43f4756d26eabc0e"
  },
  {
    "url": "/_nuxt/pages_about.c91c8b0f154353754116.js",
    "revision": "2c4beb716dc16a38f63a4f16c8dce002"
  },
  {
    "url": "/_nuxt/pages_chat.85966cee1478593dc67e.js",
    "revision": "f50257f429a0be297ca8c622fe6deb8c"
  },
  {
    "url": "/_nuxt/pages_hello.a72264b7ea150fb93c28.js",
    "revision": "7100b14305eeeeb27b7da8d719517857"
  },
  {
    "url": "/_nuxt/pages_index.830f013e90949150f214.js",
    "revision": "95922f1273f80ec93034de783d1823c3"
  },
  {
    "url": "/_nuxt/pages_register.3efeb698754e24998a30.js",
    "revision": "507ff96f124d93a33c12c69c0cd3db9e"
  },
  {
    "url": "/_nuxt/pages_student_edit.1f8403b3c16a9be42a50.js",
    "revision": "956a973f928eaa8f2b8721e461f22835"
  },
  {
    "url": "/_nuxt/pages_student_index.d0ba84303709a9bbca78.js",
    "revision": "f02bec476099cffc125f25dd32705b8a"
  },
  {
    "url": "/_nuxt/pages_student-list.39031be498b3711989db.js",
    "revision": "d78119f0d08d14331cc83098d2965236"
  },
  {
    "url": "/_nuxt/pages_student-list2.ec321117675cc7050f80.js",
    "revision": "8d427212096d0fbc6e51cc58919ac836"
  },
  {
    "url": "/_nuxt/pages_student.e82b583acc7607fe28e0.js",
    "revision": "dc4536c824eaacdb73a060699961607d"
  },
  {
    "url": "/_nuxt/pages_student2.a0ecd052c0ddaa7387f6.js",
    "revision": "6656c07bc749e588275fad21832f4e77"
  },
  {
    "url": "/_nuxt/vendor.0ca26c30692bb4abfcac.js",
    "revision": "89e1f6a7bea7f313d7cdde1318f3dc29"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

