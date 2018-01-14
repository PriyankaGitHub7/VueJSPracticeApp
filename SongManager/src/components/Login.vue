<template>
<!-- TODO : the code below is repeated in Register.vue. Check how to reuse these components -->
 <panel title = "Login">
            <v-text-field
              name="email"
              label="Email"
              v-model = "email"
            ></v-text-field>
            <br/>
            <v-text-field
              name="password"
              label="Password"
              type = "password"
              v-model = "password"
            ></v-text-field>
            <br/>
            <v-btn @click="login" class="cyan" dark>Login</v-btn>
            <div class = "error" v-html="error"></div>
  </panel>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService"

export default {
  name: 'login',
  data () {
    return {
      email : '',
      password : '',
      error : null
    }
  },
  methods:{
      async login() {              
         try{
              const response = await AuthenticationService.login({
                    email:this.email,
                    password:this.password
                })
              console.log(response.data)
              this.$store.dispatch('setToken', response.data.token)
              this.$store.dispatch('setUser', response.data.user)
            }
        catch(err){
          this.error = err.response.data.error
        }
    }
  },
  components : {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.error{
  color : red
}

a {
  color: #42b983;
}
</style>
