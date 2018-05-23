<template>
  <div>
    <h1>Hello Vue</h1>
    <div>
      <nuxt-link to="/about">About</nuxt-link>
    </div>
    <div>
      <button @click="gotoAbout">GO TO ABOUT</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotoAbout() {
      this.$router.push('/about')
      // this.$router.push({ path: '/about' })
      // this.$router.push('/about?id=1')
      // this.$router.push({ path: '/about', query: {id: 1} })
      // this.$router.replace('/about')
      // this.$router.replace({ path: '/about' })
      // this.$router.replace('/about?id=1')
      // this.$router.replace({ path: '/about', query: {id: 1} })
      // this.$router.go(-1)
    },
  },
}
</script>
