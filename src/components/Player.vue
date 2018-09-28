<template>
  <div class="player">
    <img src="@/assets/note.png"></img>
    <div class="placeholder">
      Player placeholder
    </div>

  </div>

</template>

<script>
import * as Tone from 'tone'

export default {
  name: 'Player',
  data: function () {
    return {
      pitch: 0,
      octave: 0,
      offset: 0,
      freqency: 0,
      keyType: 'white',
      active: false,
      piano: null

    }
  },
  props: {},
  computed: {},
  created () {
    this.init()
  },
  methods: {

    init: function () {
      var synth = new Tone.Synth().toMaster()
      console.log(synth)
      synth.triggerAttackRelease('C4', '8n')
    }

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
