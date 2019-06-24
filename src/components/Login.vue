<template>
    <v-form>
        <v-container grid-list-md  >
            <v-layout row wrap>
                <v-flex xs12>
                    <h1>Login</h1>
                </v-flex>
            </v-layout>
            <v-layout  fill-height column align-center   >
                <v-flex xs3>
                    <v-text-field
                color="secondary"
                label="Usuario"
                placeholder="javCho23"
                v-model="usuario"
            >
            </v-text-field>
                </v-flex>
                <v-flex xs3>
                    <v-text-field
                color="secondary"
                label="Contraseña"
                placeholder="************"
                type="password"
                v-model="pass"
            >
            </v-text-field>
                </v-flex>
                <v-flex xs1>
                    <v-btn color="info">Ingresar</v-btn>
                </v-flex>
            </v-layout>
            
        </v-container>
    </v-form>
</template>
