import { Component, OnInit } from '@angular/core';

import { CrudService } from '../app.service';

import { User } from '../app.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Users : User;
  sampleUser : any;
  constructor(private crudService : CrudService) { }

  ngOnInit() {
  }
  loginUser(){
    alert('adsa');
      let record = {};
      record['email'] =  (<HTMLInputElement>document.getElementById('email')).value;
      record['password'] = (<HTMLInputElement>document.getElementById('password')).value;
      
      this.crudService.login('Users',record).subscribe(data => {
 
        this.sampleUser = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            Name: e.payload.doc.data()['Name'],
            Age: e.payload.doc.data()['Age'],
            Address: e.payload.doc.data()['Address'],
          };
        })
        console.log(this.sampleUser);
   
      });
      
  }
}
