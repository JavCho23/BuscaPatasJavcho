<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>busca patas</span>
        <span class="font-weight-light "> MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link :to="item" v-for="(item,index) of Rutas" :key = index >
      <v-btn
        flat
      >
        <span class="mr-2">{{item}}</span>
      </v-btn>
      </router-link>
      <v-btn color="success" @click="logout" >Salir</v-btn>
    </v-toolbar>
    <v-content>
        <v-container grid-list-lg>
            <router-view/>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'App',
  data () {
    return {
      Rutas:['home','perritos','registrar']
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut()
      .then( () => this.$router.replace('login')) 
    }
  }
}
</script>
