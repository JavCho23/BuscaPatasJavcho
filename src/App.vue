<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer" >
      </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>busca patas</span>
        <span class="font-weight-light "> MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-navigation-drawer app v-model="drawer" absolute>
          <h3>Menu</h3>
        <v-layout row wrap v-for="(item,index) of Rutas" :key = index>
              <v-btn
                flat
                :to="item" 
              >
                <span text >{{item}}</span>
              </v-btn>
        </v-layout>
      
      </v-navigation-drawer>
      <v-spacer></v-spacer>
      
      <v-btn
        flat
        :to="item" v-for="(item,index) of Rutas" :key = index
      >
        <span text >{{item}}</span>
      </v-btn>
  
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
      Rutas:['home','perritos','registrar'],
      drawer: false
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
