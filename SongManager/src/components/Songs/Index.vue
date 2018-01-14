<template>
<div>
    <songs-search-panel />
    <songs-panel />
</div>
</template>

<script>
    import SongsPanel from '@/components/Songs/SongsPanel'
    import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
    import SongsService from '@/services/SongsService'
    export default {
        components : {
            Panel
        },
        data () {
            return {
                songs : []
            }
        },
        methods : {
            navigateTo(route) {
                this.$router.push(route)
            }
        },
        async mounted() {
            try{
                const response = await SongsService.index()
                this.songs = response.data
                console.log(this.songs)
            }
            catch(err){
                console.log(err)
            }
        },
        components : {
            SongsPanel,
            SongsSearchPanel
        }
    }
</script>

<style scoped>

.song{
    padding: 20px;
    height : 330px;
}

.song-title{
    font-size: 30px
}

.song-artist{
    font-size: 24px
}

.song-album{
    font-size: 18px
}

.album-image{
    width : 70%
}

</style>