<template>
  <div>
    <h1>Hello</h1>
    <button @click="e => addItem('xxx', e)">ADD</button>
    <ul>
      <li v-for="x in items" :key="x.id">
        {{ x.id }} {{ x.name }} {{ x.age }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'test', age: 25 },
        { id: 2, name: 'test', age: 25 },
        { id: 3, name: 'test', age: 25 },
        { id: 4, name: 'test', age: 25 },
      ],
    }
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.items.length + 1,
        name: 'test' + this.items.length,
        age: 25 + this.items.length,
      })
    },
  },
}
</script>
<style>
.big {
  font-size: 20px;
}
</style>
