<template>
    <div class="m-key" v-on='{ mousedown: press, mouseup: release}' >
        <template v-if='keyType == "white"'>
            <div class="white-key" :class="{'m-key-active': active}">
                <div class='m-note'>{{note}}</div>
            </div>
        </template>
        <template v-else>
            <div class="black-key">
                <div class="black-key-internal" :class="{'m-key-active': active}">
                    <div class='m-note'>{{note}}</div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import {
        Synth,
        AudioSynth,
        AudioSynthInstrument
    } from '@/libs/audiosynth.js'


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
                piano: null
            }
        },
        props: {
            note: {
                type: String,
                default: 'C1'
            }
        },
        computed: {},
        created() {
            this.init()
        },
        methods: {
            init: function () {
                [this.pitch, this.octave] = this.note.split('')
                this.octave = parseInt(this.octave)
                if (isNaN(this.octave)) { this.octave = 4}
                this.keyType = (this.pitch === this.pitch.toLowerCase()) ? 'black' : 'white'
                this.piano = Synth.createInstrument('piano');
                console.log(Synth instanceof AudioSynth)

            },
            kick: function(key, interval = 500) {
                console.log("kick")
                this.press(key);
                var key = this;
                console.log('interval = ' + interval)
                setTimeout(() => {
                    key.release()
                }, interval);
            }, 
            press: function (key) {
                this.active = true;
                // requires a conversion for audiosynth library.
                var p = this.pitch
                if (p === p.toLowerCase()) {
                    p = p.toUpperCase() + '#'
                }
                this.piano.play(p, this.octave, 2); // plays C4 for 2s using the 'piano' sound profile
                console.log(new Date() + "pressed")
            },
            release: function () {
                this.active = false;
                console.log(new Date() + "released")
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