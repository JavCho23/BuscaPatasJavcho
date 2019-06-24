<template>
    <v-flex xs12 sm3  >
        <v-card to="perritos">
            <v-img :src="pet.img" :alt="pet.nombre">
            </v-img>
            <v-card-title primary-title>
                {{pet.nombre}}
            </v-card-title>
            <v-card-text>
               <p>{{pet.descripcion}}</p>
            </v-card-text>
            <v-card-actions >
                <v-spacer></v-spacer>
                <v-btn icon ><v-icon>mdi-cards-heart</v-icon></v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>
<script>
export default {
    props: {
      pet: Object  
    },
}
</script>

