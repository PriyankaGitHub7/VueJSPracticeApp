<template>
        <v-layout>
            <v-flex xs12>
            <panel title = "Create A Song">
                <v-text-field
                    name="title"
                    label="Title"
                    v-model = "song.title"
                    required
                    :rules = [required]
                ></v-text-field>
                <v-text-field
                    name="artist"
                    label="Artist"
                    v-model = "song.artist"                    
                    required
                    :rules = [required]
                ></v-text-field>
                <v-text-field
                    name="genre"
                    label="Genre"
                    v-model = "song.genre"
                    required
                    :rules = [required]
                ></v-text-field>
                <v-text-field
                    name="album"
                    label="Album"
                    v-model = "song.album"
                    required
                    :rules = [required]
                ></v-text-field>
                <v-text-field
                    name="albumImage"
                    label="Album Image"
                    v-model = "song.albumImage"
                    required
                    :rules = [required]
                ></v-text-field>
                <v-text-field
                    name="youtubeId"
                    label="Youtube ID"
                    v-model = "song.youtubeId"
                    required
                    :rules = [required]
                ></v-text-field>
            </panel>
            </v-flex>
            <v-flex xs12>
            <panel title = "Song Structure">
            <v-text-field
              name="lyrics"
              label="Lyrics"
              v-model = "song.lyrics"
              multi-line
              required
              :rules = [required]
            ></v-text-field>
            <v-text-field
              name="tab"
              label="Tab"
              v-model = "song.tab"
              multi-line
              required
              :rules = [required]></v-text-field>
            <div class = "danger-alert" v-if="error">
                {{error}}
            </div>
            <v-btn @click="save" class="cyan" dark>
                 Save Song
            </v-btn>
            </panel>
            </v-flex>
        </v-layout>
</template>

<script>

import SongsService from '../services/SongsService'
export default {
    
    data(){
        return {
            song : {
                title : null,
                artist : null,
                genre : null,
                album : null,
                albumImage : null,
                youtubeId : null,
                lyrics : null,
                tab : null
            },
            required : (value) => !!value || 'Required.',
            error : null
        }
    },
    components : {
        Panel
    },
    async mounted() {
        const songId = this.$store.state.route.params.songId
        const response = await SongsService.show(songId)
        this.song = response.data
    },
    methods :{
        async save(){
        
            const songId = this.$store.state.route.params.songId
            const areAllFieldsFilledIn = Object.keys(this.song).every((key) => !!this.song[key]) // TODO : check about this syntax

            if(!areAllFieldsFilledIn) {
                 this.error = 'Please fill in all the required fields.'
                return;
            }

            try{
                const Song = await SongsService.put(this.song)
                this.$router.push({
                    name : 'view-song',
                    params : {
                        id : songId
                    }
                })
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
.danger-alert {
    color : red
}
</style>