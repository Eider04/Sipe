import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  todo = {usuario:'', clave:''};
  constructor(private route:Router) { }

logForm(form) {
  console.log(form);

  this.route.navigateByUrl('home');

  }
  ngOnInit() {
  }

}
