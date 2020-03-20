import { Error500Component } from './home/pages/error500/error500.component';
import { Error404Component } from './home/pages/error404/error404.component';
import { MaintenanceComponent } from './home/pages/maintenance/maintenance.component';
import { LockComponent } from './home/pages/lock/lock.component';
import { RecoverComponent } from './home/pages/recover/recover.component';
import { RegisterComponent } from './home/pages/register/register.component';
import { LoginComponent } from './home/pages/login/login.component';
import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'test', loadChildren: './test2/test2.module#Test2Module' },
            { path: 'Registro', loadChildren: './register/register.module#RegisterModule' },
            { path: 'Registro/:id', loadChildren: './register-edit/register-edit.module#RegisterEditModule'},
            { path: 'Accounts', loadChildren: './accounts/accounts.module#AccountsModule' },
            { path: 'Accounts/:id', loadChildren: './accounts-edit/accounts-edit.module#AccountsEditModule'},
            { path: 'user', loadChildren: './user-notification/user-notification.module#UserNotificationModule' },
            { path: 'user/:id', loadChildren: './user-notification-edit/user-notification-edit.module#UserNotificationEditModule'},
            { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingModule' },
            { path: 'onboarding/:id', loadChildren: './onboarding-edit/onboarding-edit.module#OnboardingEditModule'},

        ]
    },

    // Not found
   
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },
 
    { path: '**', redirectTo: 'login' }
];
