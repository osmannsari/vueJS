<template>
  <div id="secret">
  
      <div v-show="$store.state.token">
         <h1>Admin page</h1>
         </div> 
       
     
   
      <v-row justify="center" v-show="!$store.state.token">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Unauthorized user</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">You need to login</v-card-title>
        <v-card-text>Click Agree for login page</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text to="/login">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>

<script>
export default {
  data () {
      return {
        dialog: false,
      }
    },
}
</script>
<style scoped>
#secret {
  width: 500px;
  border: 2px ;
  margin: auto;
  margin-top: -300px;
  padding: 20px;
}
</style>