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
    </v-toolbar>
    <v-content>
        <v-container grid-list-xs>
            <router-view/>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      Rutas:['home','perritos']
    }
  }
}
</script>
