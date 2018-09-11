<template>
    <div class='m-key'>
        <div class='m-note'> Note</div>
    </div>

</template>

<script>
    PITCHES = ['A', 'a', 'B', 'C', 'c', 'D', 'd', 'E', 'F', 'f', 'G', 'g']
    OCTAVED = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    export default {
        name: 'Key',
        date: function () {
            return {
                pitch: 0,
                octave: 0,
                offset: 0,
                freqency: 0
            }
        },
        props: {
            note: '',
            pressed: false

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .m-key {
        width: 2em;
        height: 6em;
        background-color: red;
    }

    .m-note {
        bottom: 0;
    }



    .m-key-pressed {
        background-color: black
    }
</style>