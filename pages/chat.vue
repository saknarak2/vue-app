<template>
  <div>
    <h1>Chat room {{ lotto }}</h1>
    <div>
      <v-text-field v-model="name" label="ชื่อ"/>
      <v-text-field v-model="text" label="ข้อความ"/>
      <v-btn @click="send">ส่ง</v-btn>
    </div>
    <ul>
      <li v-for="(m, idx) in msg" :key="idx">
        <b>{{ m.name }}</b> พูดว่า {{ m.text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      text: '',
      msg: [
        { name: 'NAME1', text: 'TEXT1' },
      ],
      lotto: 'xxx',
    }
  }, // data
  created() {
    this.$socket.subscribe('room39', this.onMsg)
    this.$socket.subscribe('login', this.onLogin)
    this.$socket.subscribe('lotto', this.onLotto)
  },
  beforeDestroy() {
    this.$socket.unsubscribe('room39')
    this.$socket.unsubscribe('login')
  },
  methods: {
    send() {
      this.$socket.publish('room39', {
        name: this.name,
        text: this.text,
      })
    },
    onMsg(data) {
      this.msg.unshift(data)
      this.msg.splice(5)
    },
    onLogin(data) {
      console.log('login=', data)
    },
    onLotto(data) {
      console.log('lotto=', data)
      this.lotto = data
    },
  }, // methods
}
</script>
