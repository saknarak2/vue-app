<template>
  <div>
    <div>
      <h1>{{ user.name }}</h1>
      <select v-model="room">
        <option v-for="r in roomList" :key="r" :value="r">ห้อง {{ r }}</option>
      </select>
      <v-radio-group v-model="room">
        <v-radio
          v-for="n in roomList"
          :key="n"
          :label="`ห้อง ${n}`"
          :value="n"
        />
      </v-radio-group>
      <v-btn @click="doSave">SAVE</v-btn>
    </div>
    <table>
      <tr>
        <td>รหัส</td>
        <td>ชื่อ</td>
        <td>ห้อง</td>
      </tr>
      <tr v-for="st in students2" :key="st.code">
        <td>{{ st.code }}</td>
        <td>{{ st.name }}</td>
        <td>{{ st.room }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      room: '3',
    }
  }, // data
  computed: {
    user() {
      return this.$store.state.user
    },
    students() {
      return this.$store.state.students
    },
    roomList() {
      // let out = []
      // for (let i = 0; i < this.students.length; i++) {
      //   if (out.indexOf(this.students[i].room) === -1) {
      //     out.push(this.students[i].room)
      //   }
      // }
      // let out = {}
      // for (let i = 0; i < this.students.length; i++) {
      //   if (!out[this.students[i].room]) {
      //     out[this.students[i].room] = true
      //   }
      // }
      // return Object.keys(out) // ['1', '2', '3', '4']
      // prev = ['1']
      // return this.students.reduce((prev, st) => {
      //   if (prev.indexOf(st.room) === -1) {
      //     prev.push(st.room)
      //   }
      //   // return prev
      // }, [])
      return Object.keys(this.students.reduce((p, st) => {
        p[st.room] = st.room
        return p
      }, {}))
    },
    students2() {
      // let out = []
      // for (let i = 0; i < this.students.length; i++) {
      //   if (this.students[i].room === this.room) {
      //     out.push(this.students[i])
      //   }
      // }
      // return out
      return this.students.filter(st => st.room === this.room)
    },
  }, // computed
  methods: {
    async doSave() {
      let res = await this.$http.post('/student/save', { code: '', name: '', birth: '' })
      if (res.data.ok) {
        // SAVE สำเร็จ
        console.log('save สำเร็จนะ')
      } else {
        // SAVE ไม่เสร็จ
        console.log('save ไม่สำเร็จนะ')
      }
    },
  },
}
</script>
