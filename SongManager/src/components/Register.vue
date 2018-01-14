<template>
          <panel title = "Register">
            <form name="tab-tracker-form" autocomplete="off">
              <v-text-field
                name="email"
                label="Email"
                v-model = "email"
                id="email"
              ></v-text-field>
              <br/>
              <v-text-field
                name="password"
                label="Password"
                type="password"
                v-model = "password"
                id="password"
              ></v-text-field>
            </form>
            <br/>
            <v-btn @click="register" class="cyan" dark>Register</v-btn>
            <div class = "error" v-html="error"></div>
          </panel>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService"
export default {
  name: 'register',
  data () {
    return {
      email : '',
      password : '',
      error : null
    }
  },
  methods:{
      async register() {              
         try{
              const response = await AuthenticationService.register({
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
