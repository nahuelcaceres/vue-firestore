<template>
    <div>
        <h2>Loguearse</h2>

        <form @submit.prevent="login">
            <input type="text" v-model="usuario" placeholder="Usuario" >
            
            <input type="password" v-model="contrasena" placeholder="Contraseña">

            <input type="submit" value="Ingresar">
        </form>
        
        <!-- <pre>{{$data}}</pre> -->

    </div>
</template>

<script>
import firebase from '../Firebase'

export default {
    data() {
        return {
            usuario: '',
            contrasena: ''
        }
    },
    methods: {
        login(){
            firebase.auth()
            .signInWithEmailAndPassword(this.usuario, this.contrasena)
                .then(() => this.$router.replace('empanada-listado'), (error) => console.error(error));
        }
    }
}
</script>

<style>

</style>