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
      let record = {};
      record['email'] =  (<HTMLInputElement>document.getElementById('email')).value;
      record['password'] = (<HTMLInputElement>document.getElementById('password')).value;
      
      this.crudService.login('Users',record).subscribe(data => {
 
        this.sampleUser = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            CityID: e.payload.doc.data()['cityID'],
            Email: e.payload.doc.data()['email'],
            FullName: e.payload.doc.data()['fullName'],
            Password: e.payload.doc.data()['password'],
            ResidanceID: e.payload.doc.data()['residanceID'],
            TotalEarnings: e.payload.doc.data()['totalEarnings'],
          };
        })
        console.log(this.sampleUser);
   
      });
      
  }
}
