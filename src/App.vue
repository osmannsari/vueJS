<template>
  <v-app>
    <v-col></v-col>
    <v-col></v-col>

    <v-app-bar  app color="green lighten-2" dark>
      <div class="d-flex align-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-img
              v-on="on"
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://enisnecipoglu.com/wp-content/uploads/2016/12/AIESEC-Blue-Logo-bg.png"
              transition="scale-transition"
              width="150"
            />
          </template>
          <span>AIESEC</span>
        </v-tooltip>
      </div>

      <v-spacer></v-spacer>
      <v-btn rounded color="blue" dark to="/">
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn rounded color="blue" dark to="/deneme">
        <span class="mr-2">Other Page</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn rounded color="blue" dark to="/private">
        <span class="mr-2">Admin</span>
        <v-icon>mdi-key</v-icon>
      </v-btn>

      <v-btn rounded color="blue" dark @click="update" v-show="$store.state.token">
        <span class="mr-2">Todo</span>
        <v-icon>mdi-eraser</v-icon>
      </v-btn>
      
      <v-btn
        depressed
        disabled
        rounded
        color="blue"
        dark
        @click="update"
        v-show="!$store.state.token"
      >
        <span class="mr-2">Todo</span>
        <v-icon>mdi-eraser</v-icon>
      </v-btn>

      <v-btn rounded color="blue" dark to="/register"
       v-show="!$store.state.token">
        <span class="mr-2">Register</span>
        <v-icon>mdi-reminder</v-icon>
      </v-btn>

      <v-tooltip bottom>
        <template v-slot:activator="{  }">
          <v-btn rounded color="blue" to="/login" v-show="!$store.state.token">
            <span class="mr-2">Login</span>
            <v-icon>mdi-pen</v-icon>
          </v-btn>
         
          <v-btn rounded color="blue" v-show="$store.state.token" @click="logout">
            <span class="mr-2">Logout</span>
            <v-icon>mdi-door</v-icon>
          </v-btn>
        </template>
        <span>Tooltip</span>
      </v-tooltip>
    </v-app-bar>

    <v-content>
      <div>
        <header class="app-header"></header>

        <transition name="moveInUp">
          <router-view></router-view>
        </transition>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return { deger: false };
  },
  computed: {
    isLoggedin: function() {
      return this.$store.getters.isLoggedin;
    },
    isAdmin:function(){
      return this.$store.getters.isAdmin;
    }
  },
  methods: {
    update() {
      this.$router.push("/todo");
      this.$store.commit("changeBack");
      console.log("invisible= " + this.$store.state.invisible);
    },

    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>
<style >
.moveInUp-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}
.moveInUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
