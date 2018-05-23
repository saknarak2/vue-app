<template>
  <v-container>
    <v-layout column>
      <v-flex xs12 >
        <h1 class="headline">Register</h1>
      </v-flex>
      <v-flex xs12 sm12>
        <v-text-field v-model="user" label="ชื่อผู้ใช้"/>
      </v-flex>
      <v-flex xs6>
        <v-text-field v-model="pass" type="password" label="รหัสผ่าน"/>
      </v-flex>
      <v-flex xs6>
        <v-text-field v-model="pass2" type="password" label="รหัสผ่านอีกครั้ง"/>
      </v-flex>
      <v-flex xs12>
        <v-btn @click="register"><v-icon>speaker_notes_off</v-icon> ลงทะเบียน</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      user: '',
      pass: '',
      pass2: '',
    }
  },
  methods: {
    register() {

    },
  },
}
</script>
