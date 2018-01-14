<template>
    <panel title = "Song Lyrics">
        <textarea
            v-model = "lyrics"
            readonly>
        </textarea>
    </panel>
</template>

<script>
    export default {
        components: {
            Panel
        },
        props : ['lyrics']
    }
</script>

<style scoped>

textarea  {
    width : 100%;
    font-family: monospace;
    border : none;
    overflow :auto;
}

</style>