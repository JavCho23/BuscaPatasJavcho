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
                  <v-flex xs8>
                      <v-btn raised class="secondary" @click="onSubirArchivo" >Subir Imagen</v-btn>
                      <input style="display: none" 
                      type="file" 
                      ref="fileInput" 
                      accept="image/*"
                      @change="onUpload">
                  </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                   <v-flex xs1>
                   <v-btn color="success"
                   type="submit" 
                   >Enviar</v-btn>
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
            descripcion: "",
            image: null,
            imageUrl: ""
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
            
        },
        onSubirArchivo(){
            this.$refs.fileInput.click();
        },
        onUpload(event){
            const files = event.target.files;
            let filename = files[0].name;
            if (filename.lastIndexOf('.') <= 0 ) {
                return alert('Subir una imagen por favor');
            }
            const fileReader = new FileReader();
            fileReader.addEventListener('load', ()=>{
                this.imageUrl =fileReader.result;
            })
            fileReader.readAsDataURL(files[0]);
            this.image = files[0];
        }
    }
}

</script>
