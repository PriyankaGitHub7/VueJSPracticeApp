<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <song-meta-data :song ="song" />
            </v-flex>
            <v-flex xs6>
                <lyrics :lyrics = "song.lyrics" />
            </v-flex>                 
        </v-layout>
        <v-layout>
            <v-flex xs6>
                <tabs :tabs = "song.tab" />
            </v-flex>   
            <v-flex xs6>
                <you-tube :url = "song.youtubeId" />
            </v-flex>             
        </v-layout>
    </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetaData from '@/components/ViewSongs/SongMetaData'
import YouTube from '@/components/ViewSongs/YouTube'
import Lyrics from '@/components/ViewSongs/Lyrics'
import Tabs from '@/components/ViewSongs/Tabs'

 export default {
     data() {
         return {
            song : null
         }
     },
     async mounted(){
         const songId = this.$store.state.route.params.songId
         const response = await SongsService.show(songId)
         this.song = response.data
     },
     components:{
         Panel,
         SongMetaData,
         YouTube,
         Lyrics,
         Tabs
     }
 }
</script>

<style scoped>

</style>