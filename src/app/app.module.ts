import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { LoginComponent } from "./home/login/login.component"
import { RegisterComponent } from "./home/register/register.component"

import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  declarations: [AppComponent, LoginComponent,RegisterComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
