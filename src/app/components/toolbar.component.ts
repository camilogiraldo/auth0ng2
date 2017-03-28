import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [AuthService]
})
export class ToolbarComponent implements OnInit {

  constructor(private authSrv: AuthService) { }

  login() {
    this.authSrv.login();
  }

  logout() {
    this.authSrv.logout();
  }

  loggedIn(): boolean {
    return this.authSrv.loggedIn();
  }


  ngOnInit() {}

}
