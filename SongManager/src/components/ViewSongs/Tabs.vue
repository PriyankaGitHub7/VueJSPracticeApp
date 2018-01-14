<template>
    <panel title = "Tabs" class = "mt-4">
        <textarea
            v-model = "tabs"
            readonly>
        </textarea>
    </panel>
</template>

<script>
    export default {
        components: {
            Panel
        },
        props : ['tabs']
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