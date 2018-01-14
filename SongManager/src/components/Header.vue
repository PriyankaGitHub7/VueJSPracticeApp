<template>
    <v-toolbar fixed class = "cyan" dark>
        <v-toolbar-title class = "mr-4"> 
        <span @click="navigateTo({ name : 'root'})" class = "home">
            TabTracker
        </span>
        <v-btn flat dark @click="navigateTo({ name : 'song'})">
            Browse
        </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>    
        <v-toolbar-items>
            <!-- router-link to="register"> Not used because it displays the button like a link </router-link -->
            <v-btn v-if = "!$store.state.userIsLoggedIn" flat dark @click="navigateTo({ name : 'login'})">
                Login
            </v-btn>
            <v-btn v-if = "!$store.state.userIsLoggedIn" flat dark @click="navigateTo({ name : 'register'})">
                Sign Up
            </v-btn>
            <v-btn v-if = "$store.state.userIsLoggedIn" flat dark @click="logout">
                Logout
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        navigateTo(router) {
            this.$router.push(router)
        },

        logout(){
            this.$store.dispatch('setToken',null)
            this.$store.dispatch('setUser',null)
            this.$router.push({
                name : 'root'
            })
        }
    }
}
</script>

<style scoped>
 .home  {
     cursor : pointer;
 }

 .home:hover {
     color : purple;
 }
</style>