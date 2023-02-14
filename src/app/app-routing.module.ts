import { NgModule} from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { LoginComponent } from "./home/login/login.component"
import { RegisterComponent } from "./home/register/register.component"

const routes: Routes = [{path: '', component: LoginComponent},
{path: 'register', component: RegisterComponent}]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule{}
