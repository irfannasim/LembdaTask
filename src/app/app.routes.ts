import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login.component';

const AppRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'index', component: LoginComponent},
    {path: 'login', component: LoginComponent},
];

export const routes = RouterModule.forRoot(AppRoutes);
