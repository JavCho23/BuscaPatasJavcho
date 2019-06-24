<template>
    <v-content>
       <v-form @submit.prevent="registrar" >
           <v-container grid-list-xs>
              <v-layout row wrap justify-center>
                   <v-flex xs8>
                    <v-text-field
                        color="secondary"
                        label="Nombre"
                        placeholder="Toby"
                        v-model="nombre"
                    ></v-text-field>
               </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                   <v-flex xs8>
                    <v-text-field
                        color="secondary"
                        label="Edad (años)"
                        placeholder="1"
                        type="number"
                        v-model="edad"
                    ></v-text-field>
               </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                   <v-flex xs8>
                    <v-text-field
                        color="secondary"
                        label="Descripcion"
                        placeholder="Muy jugueton"
                        v-model="descripcion"
                    ></v-text-field>
               </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                   <v-flex xs4>
                    <v-text-field
                        color="secondary"
                        type="submit"

                    ></v-text-field>
               </v-flex>
              </v-layout>
           </v-container>
       </v-form> 
    </v-content>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
    data(){
        return{
            nombre : "",
            edad : 0,
            descripcion: ""
        }
    },
    methods:{
        registrar(){
            firebase.firestore().collection("perritos").add({
                    nombre: this.nombre,
                    descripcion: this.descripcion,
                    edad: this.edad
                })
                .then(
                 this.$router.replace('perritos')  
                )
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
            
        }
    }
}

</script>
