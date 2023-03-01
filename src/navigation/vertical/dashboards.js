// ** Icons Import
import {
    Home,
    Users, Droplet, Mail, Trello, Briefcase, Grid, Wind
} from 'react-feather'

export default [
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: <Home size={12}/>,
        navLink: '/dashboard'
    },
    {
        id: 'vehiclesTypeView',
        title: 'Manage Vehicle Types',
        icon: <Wind size={12}/>,
        navLink: '/vehicle-type'
    },
    {
        id: 'employeeView',
        title: 'Manage Employee',
        icon: <Briefcase size={12}/>,
        navLink: '/employee'
    }
]
