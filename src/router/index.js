import VueRouter from 'vue-router';
import BoardList from '@/components/BoardList';
import ShowBoard from '@/components/ShowBoard';
import AddBoard from '@/components/AddBoard';
import EditBoard from '@/components/EditBoard';

import EmpanadaListado from '@/components/EmpanadaListado';
import AgregarEmpanada from '@/components/AgregarEmpanada';

export default new VueRouter({
    routes: [
        {
            path:'/',
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
            path: '/empanada-listado',
            name: 'EmpanadaListado',
            component: EmpanadaListado
        },
        {
            path: '/agregar-empanada',
            name: 'AgregarEmpanada',
            component: AgregarEmpanada
        }
    ]
})