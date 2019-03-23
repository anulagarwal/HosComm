import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private matToast: MatSnackBar ) { }

  ngOnInit() {
  }

  registerNotification(){
    this.matToast.open('Registered Successfully','', {
      duration: 5000
    })
  }
}
