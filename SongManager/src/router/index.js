import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import CreateSongs from '@/components/CreateSongs'
import ViewSong from '@/components/ViewSongs/Index'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/song',
      name: 'song',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'create-song',
      component: CreateSongs
    },
    {
      path: '/songs/:songId',
      name: 'view-song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'songs-edit',
      component: EditSong
    }
  ]
})
