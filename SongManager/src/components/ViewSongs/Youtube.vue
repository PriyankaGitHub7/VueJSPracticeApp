<template>
    <panel title = "YouTube Video" class = "mt-4">
        <youtube
            :video-id = "url"
            :player-width = "400"
            :player-height = "200">
        </youtube>       
    </panel>
</template>

<script>
    export default {
        components : {
            Panel
        },
        props : ['url']
    }
</script>

<style scoped>

</style>