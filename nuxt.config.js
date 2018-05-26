module.exports = {
  mode: 'spa',
  render: {
    resourceHints: false,
  },
  router: {
    mode: 'hash',
  },
  build: {
    vendor: [
      'vuetify',
      'vue-axios',
      'moment',
      'socket.io-client',
    ],
  },
  plugins: [
    '~/plugins/vuetify',
    '~/plugins/axios',
    '~/plugins/misc',
    '~/plugins/socket',
  ],
  proxy: {
    '/api': 'http://127.0.0.1:7000',
    ws: true,
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
  ],
  loading: { color: '#3B8070' },
  manifest: {
    name: 'My App Long Name',
    short_name: 'My App',
    theme_color: '#3B8070',
  },
  icon: {
    iconSrc: 'static/icon.png',
    sizes: [32, 64, 96, 192, 256, 512, 1024],
  },
  head: {
    title: 'APP TITLE',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0ff5' },
      { name: 'fragment', content: '!' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'msapplication-TileImage', content: '/icons/favicon.png' },
      { name: 'msapplication-TileColor', content: '#000' },
    ],
    link: [
      { rel: 'shortcut icon', href: '/icons/favicon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon.png' },
      { rel: 'apple-touch-icon', href: '/icons/favicon.png' },
      { rel: 'apple-touch-startup-image', href: '/images/launch-2048x2732.png', media: '(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)' },
    ],
  },
}
