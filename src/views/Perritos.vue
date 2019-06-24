<template>
   <v-layout row wrap>
        <pet-card 
            v-for="item of perritos" 
            :key="item.id" 
            :pet="item" >
        </pet-card>
    </v-layout>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import PetCard from "@/components/PetCard";
export default {
    name: "Perritos",
    components:{
        PetCard
    },
    data(){ 
        return {
            perritos: []
        }
    },
    methods:{
        cargarPet(){
            firebase
            .firestore()
            .collection('perritos')
            .onSnapshot( snap =>{
                this.perritos = [];
                snap.forEach(doc => {
                    this.perritos.push({
                        id: doc.id,
                        nombre: doc.data().nombre,
                        img: doc.data().img,
                        descripcion: doc.data().descripcion,
                        edad: doc.data().edad
                    });
                });
            });
        }
        
    },
    created(){
              this.cargarPet();
        }
};
</script>
