import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyAsezEOVTDYp95CFqIwDOSRrCOEtVckjS0",
  authDomain: "busca-patas-javcho.firebaseapp.com",
  databaseURL: "https://busca-patas-javcho.firebaseio.com",
  projectId: "busca-patas-javcho",
  storageBucket: "",
  messagingSenderId: "516720288562",
  appId: "1:516720288562:web:2c07034d74ed0dd8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
