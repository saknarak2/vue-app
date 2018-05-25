<template>
  <v-container>
    <v-layout column>
      <v-flex><v-select v-model="room" :items="roomList"/></v-flex>
      <v-flex>
        <v-data-table
          :headers="headers"
          :items="students2"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.code }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.room }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      room: '3',
      headers: [
        {
          text: 'รหัส',
          align: 'left',
          value: 'code',
        },
        { text: 'ชื่อ - นามสกุล', value: 'name' },
        { text: 'ห้อง', value: 'room' },
      ],
    }
  },
  computed: {
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
  },
}
</script>
