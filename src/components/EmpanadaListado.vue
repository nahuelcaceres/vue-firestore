<template>
   <b-row>
    <b-col cols="12">
        <h2>
            Empanadas Listado
            <b-link href="#/agregar-empanada">(Agregar Empanada)</b-link>
        </h2>
        <b-table striped hover :items="empanadas" :fields="fields">
            <template v-slot:cell(actions)="data">
                <b-button @click.stop="details(data.item)" variant="primary">Detalle</b-button>
            </template>
        </b-table>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'

export default {
    name: 'EmpanadaListado',
    data (){
        return {
            fields: [
                { key: 'codigo', label: 'Codigo', sortable: true, 'class': 'text-left'},
                { key: 'descripcion', label: 'Descripcion', sortable: true, 'class': 'text-left'},
                { key: 'actions', label: 'Action', 'class': 'text-center'},
            ],
            empanadas: [],
            errors: [],
            ref: firebase.firestore().collection('empanadas'),
        }
    },
    created(){
        this.ref.onSnapshot((querySnapshot) => {
            this.empanadas = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().estado == 'alta'){
                    this.empanadas.push({
                        key: doc.id,
                        codigo: doc.data().codigo,
                        descripcion: doc.data().descripcion
                    });
                }
            });
        });
    },
    methods: {
        details(empanada){
            router.push({name: 'MostrarEmpanada', params: {id: empanada.key}})
        }
    }
}
</script>

<style>
    .table {
        width: 96%;
        margin: 0 auto;
    }
</style>