<template>
  <div class="m-key" v-on='{ mouseenter: press, mouseleave: release}'>
    <template v-if='keyType == "white"'>
      <div class="white-key" :class="{'m-key-active': active}">
        <div class='m-note'>{{note}}</div>
      </div>
    </template>
    <template v-else>
      <div class="black-key">
        <div class="black-key-internal" :class="{'m-key-active': active}">
          <div class='m-note'>{{note | normalize}}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import * as Tone from 'tone'

export default {
  name: 'Key',
  data: function () {
    return {
      pitch: 0,
      octave: 0,
      offset: 0,
      freqency: 0,
      keyType: 'white',
      active: false,
      synth: null
    }
  },
  props: {
    note: {
      type: String,
      default: 'C1'
    }
  },
  filters: {
    normalize: function (value) {
      if (value.includes('#')) {
        value = value.replace('#', '')
        value = value.toLowerCase()
      }
      return value
    }
  },
  computed: {},
  created () {
    this.init()
  },
  methods: {
    init: function () {
      let split = this.note.length - 1
      this.pitch = this.note.slice(0, split)
      this.octave = parseInt(this.note.slice(split, split + 1))
      if (isNaN(this.octave)) {
        this.octave = 4
      }
      this.keyType = this.note.includes('#') ? 'black' : 'white'

      this.synth = new Tone.Synth().toMaster()
    },
    kick: function (key, interval = 500) {
      this.press(key)
      var key = this
      setTimeout(() => {
        key.release()
      }, interval)
    },
    press: function (key) {
      this.active = true
      let duration = '4n'
      this.synth.triggerAttack(this.note)
    },
    release: function () {
      this.active = false
      this.synth.triggerRelease()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .m-key {
    display: inline-flex;
  }

  .white-key {
    position: relative;
    z-index: -1;
    width: 2em;
    height: 10em;
    border: 0.1em;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    border-collapse: collapse;
    background-color: white;
  }

  .black-key {
    position: relative;
    z-index: 1;
    width: 0em;
    height: 10em;
    border-width: 0px;

    .black-key-internal {
      position: absolute;
      background-color: black;
      vertical-align: top;
      width: 1.2em;
      height: 6em;
      left: -0.6em;
      right: -0.6em;
    }
  }

  .m-note {
    position: absolute;
    width: 100%;
    bottom: 5%;
    text-align: center;
    font-weight: bold;
    font-size: 90%;
  }

  .m-key-active {
    background-color: burlywood !important;
  }
</style>
