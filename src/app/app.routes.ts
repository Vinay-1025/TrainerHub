import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgresstrackingComponent } from './components/dashboard_pages/progresstracking/progresstracking.component';
import { BooksessionComponent } from './components/dashboard_pages/booksession/booksession.component';
import { ProfileComponent } from './components/dashboard_pages/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'landingpage',
        pathMatch: 'full'
    },
    {
        path:'landingpage',
        component:HomeComponent
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'progessTracking',
        component:ProgresstrackingComponent
    },
    {
        path: 'booking',
        component:BooksessionComponent
    },
    {
        path: 'profile',
        component:ProfileComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
];
