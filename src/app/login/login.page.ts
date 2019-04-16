import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapperService } from '../mapper.service';
import { CrudService } from '../app.service';
import { User,Visit } from '../app.model';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  tempUser : User;
  tempVisit : Visit;
  tempVisits : Visit[];
  sampleUser : any;
  sampleUsers : User[];
  visits : any;
  constructor(private crudService: CrudService, private mapper:MapperService,private router: Router,private storage: Storage) { }

  ngOnInit() {
    this.sampleUsers=null;
  }
  loginUser(){
      let record = {};
      record['email'] =  (<HTMLInputElement>document.getElementById('email')).value;
      record['password'] = (<HTMLInputElement>document.getElementById('password')).value;

      this.crudService.login('Users',record).subscribe(data => {

        this.sampleUser = this.mapper.mapUsers(data);
        console.log(this.sampleUser);

        //save user in local storage so that we can access that afterwards.
        this.storage.set('user', this.sampleUser);
      });

  }
  addVisit(){

    this.storage.get('user').then((val) => {
      this.sampleUser = val;
    });
    this.tempVisit = {
      userId:        '1MsCdMka7wFKyx38B4gY',
      groceryStoreId: '',
      residanceId:   '3OZjp06S5KdVQoAlVbwv',
      timeOfVisit:   new Date(),
    }

    this.crudService.create('Visits',this.tempVisit).then(resp => {
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
}
