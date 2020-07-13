<template>
  <div id="login">
    <div v-show="$store.state.token">
         <h1>Log out first</h1>
         </div> 
         <div v-show="!$store.state.token">
    <h1>Register</h1>
    
    <input type="email" name="email" v-model="email" placeholder="email" />
    <br />
    <input type="username" name="username" v-model="username" placeholder="username" />
    <br />
    <input type="password" name="password" v-model="password" placeholder="password" />

    <br />
    <v-btn @click="register">Register</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
     
      email: "",
      username: "",
      password: ""
    };
  },

  methods: {
    register: function() {
      let data = {
       
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("register", data);
      this.$router.push("/login");
    }
  }
};
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