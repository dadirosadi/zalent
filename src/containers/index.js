import {lazy} from 'react';

const SigninPage = lazy(() => import('./signin/signin.component'))
const DashboardPage = lazy(() => import('./dashboard/dashboard.component'))

export {
    SigninPage,
    DashboardPage,
}