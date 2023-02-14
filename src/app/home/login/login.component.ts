import { Component } from "@angular/core";
import { EventData } from "@nativescript/core";
import { openUrl } from "@nativescript/core/utils";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id
})
export class LoginComponent {
  onTap(args: EventData) {
    openUrl('/')
  }
}
