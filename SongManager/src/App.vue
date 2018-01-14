<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from "./components/Header.vue"
export default {
  name: 'app',
  components : {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Check why these classes work only here and not anywhere else
  // check this syntax

.input-group--text-field input{ 
  border-bottom : 1px solid black;
}

.toolbar__title {
  color : white;
}

.btn__content{
  color : white;
}
 */
</style>
