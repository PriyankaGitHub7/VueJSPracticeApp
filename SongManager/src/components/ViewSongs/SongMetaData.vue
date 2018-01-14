<template>
    <panel title = "Song Detail">
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
                <v-btn @click="navigateTo({name : 'songs-edit', params:{songId : song.id}})" class="cyan" dark>
                  Edit
                </v-btn>
            </v-flex>
            <v-flex xs6>
                <img class = "album-image" :src = "song.albumImage" />
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
    export default {
        props : [
            'song'
        ],
        components : {
            Panel
        },
        methods : {
            navigateTo(route) {
                this.$router.push(route)
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