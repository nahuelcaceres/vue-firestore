import VueRouter from 'vue-router';
import BoardList from '@/components/BoardList';
import ShowBoard from '@/components/ShowBoard';
import AddBoard from '@/components/AddBoard';
import EditBoard from '@/components/EditBoard';

import firebase from '../Firebase'
import Login from '@/components/Login';
import EmpanadaListado from '@/components/EmpanadaListado';
import AgregarEmpanada from '@/components/AgregarEmpanada';

const router = new VueRouter({
    routes: [
        {
            path:'/board-list',
            name: 'BoardList',
            component: BoardList
        },
        {
            path: '/show-board/:id',
            name: 'ShowBoard',
            component: ShowBoard
        },
        {
            path: '/add-board',
            name: 'AddBoard',
            component: AddBoard
        },
        {
            path: '/edit-board/:id',
            name: 'EditBoard',
            component: EditBoard
        },
        {
            path: '/',
            redirect: '/login'
        },
        { //Cualquier url no valida...envia a login
            path: '*',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/empanada-listado',
            name: 'EmpanadaListado',
            component: EmpanadaListado,
            meta:{
                autentificado: true //Para poder acceder ..tienes que estar autenficado.
            }
        },
        {
            path: '/agregar-empanada',
            name: 'AgregarEmpanada',
            component: AgregarEmpanada
        }
    ]
})

router.beforeEach((to, from, next) => {

    //Tengo un Usuario logueado
    let usuario = firebase.auth().currentUser;
    
    //console.log(usuario);
    
    //Es una ruta que requiere estar autentificado
    let autorizacion = to.matched.some(record => record.meta.autentificado);

    if (autorizacion && !usuario){
        next('login');
    
    } else if (!autorizacion && usuario) {
        next('empanada-listado');
    
    } else {
        next();
    }
})

export default router;