<template>
    <panel title = "Songs">
         <v-btn slot="action" to = "songs/create"
            class = "cyan accent-2"
            light
            small
            absolute
            middle
            right
            fab dark>
            <v-icon>add</v-icon>
        </v-btn>       
        <div v-for = "song in songs" :key = "song.id">
            <v-layout>
                <v-flex xs6>
                    <div class = "song-title">
                         {{song.title}}
                    </div>
                    <div class = "song-artist">
                        {{song.artist}}
                    </div>
                    <div class = "song-album">
                        {{song.album}}
                    </div>
                     <v-btn @click = "navigateTo({name : 'view-song', params:{songId : song.id}})" class="cyan" dark>View</v-btn>
                </v-flex>
                <v-flex xs6>
                    <img class = "album-image" :src = "song.albumImage" />
                </v-flex>
            </v-layout>
        </div>
    </panel>
</template>

<script>
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