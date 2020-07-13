<template>
  <div id="login">
    <h1>Login</h1>

    <input type="username" name="username" v-model="username" placeholder="username" />
    <br />
    <input type="password" name="password" v-model="password" placeholder="password" />

    <br />
    <v-btn @click="login">Login</v-btn>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      
      username: "",
      password: ""
    };
  },

  methods: {
    login: function() {
      
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => this.$router.push("/private"))
        .catch(err => console.log(err));
    }
  }
};

//     async login(){
// let username = this.username
// let password = this.password
// console.log(username,password);
// this.$store.dispatch('login', { username, password })
//   const response= await AuthenticatiosService.login({
//         password: this.password,
//         username: this.username,

//     })

//  console.log(response.data)
</script>


<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: -300px;
  padding: 20px;
}
</style>