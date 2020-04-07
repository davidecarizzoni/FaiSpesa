import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SigninComponent } from './components/signin/signin.component';

// DICHIARAZIONE ROUTES DEI COMPONENTI
const appRoutes: Routes = [
    { path:'home', component: HomeComponent},
    { path:'login',component: LoginComponent},
    { path:'list', component: ListComponent},
    { path:'signin',component: SigninComponent},
    { path:'', redirectTo: '/home', pathMatch:'full'},
    { path:'**',component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class ListRoutingModule {}