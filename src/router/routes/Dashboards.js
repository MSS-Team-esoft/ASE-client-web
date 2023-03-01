import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../custom-views/dashboard/Dashboard'))
  },
  {
    path: '/vehicle-type',
    component: lazy(() => import('../../custom-views/ManageVehicleTypes/ManageVehicleType'))
  }
]

export default DashboardRoutes
