<template>
  <div id="keyboard">
    <key v-for="n in all_notes" :note='n'></key>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import Key from './Key'
  const PITCHES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  const OCTAVES = [2, 3, 4, 5, 6]
  // const OCTAVES = [1, 4, 9]
  const NOTES = OCTAVES.map(function (o) {
      return PITCHES.map(function (p) {
        return p + o
      })
    })
    .reduce((a, b) => a.concat(b), [])

  export default {
    name: 'keyboard',
    data: function () {
      return {
        all_notes: NOTES
      }
    },
    components: {
      Key
    },
    created() {}
  }
</script>

<style scoped>

</style>