<template>
  <div id="app">
  <my-radio label="0" v-model="gender">女</my-radio>
  <my-radio label="1" v-model="gender">男</my-radio>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      gender: '1'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
