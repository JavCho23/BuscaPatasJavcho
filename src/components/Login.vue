<template>
    <v-form @submit.prevent="login">
        <v-container grid-list-md  >
            <v-layout row wrap>
                <v-flex xs12 text-xs-center>
                    <h1>Login</h1>
                </v-flex>
            </v-layout>
            <v-layout  row wrap justify-center  >
                <v-flex xs6>
                    <v-text-field
                        color="secondary"
                        label="Usuario"
                        placeholder="javCho23"
                        type="email"
                        v-model="user"
                    >
                    </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap justify-center>
                    <v-flex xs6>
                    <v-text-field
                        color="secondary"
                        label="Contraseña"
                        placeholder="************"
                        type="password"
                        v-model="pass"
                    >
                    </v-text-field>
                </v-flex>
            </v-layout>
                
               
            
            <v-layout row wrap justify-center>
                <v-flex xs3>
                            <v-text-field
                            color="secondary"
                            type="submit"
                        >
                    </v-text-field>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    data(){
        return{
            user: '',
            pass: ''
        }
    },
    methods:{
        login(){
           firebase.auth()
           .signInWithEmailAndPassword(this.user, this.pass) // eslint-disable-next-line
           .then((user) => alert('Usuario Conectado'), (error) => console.error(error)) 
           
        }
    }
}
</script>
