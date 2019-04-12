import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CrudService } from '../app.service';
import { Router } from '@angular/router';
import { MapperService } from '../mapper.service';
import {City, Residance,User} from '../app.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  sampleUser : User;
  cities: City[];
  residances: Residance[];
  selecCities: any;
  selectedValueCity: string;
  selectedValueRes: string;

  constructor( private matToast: MatSnackBar ,private crudService: CrudService, private mapper:MapperService,private router: Router) { }

  ngOnInit() {
    this.crudService.read('City').subscribe(data => {
      this.cities = this.mapper.mapCities(data);
    });

    this.crudService.read('Residance').subscribe(data => {
      this.residances = this.mapper.mapResidances(data);
    });
  }
  registerNotification() {
    var email = (<HTMLInputElement>document.getElementById('email')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;
    var fullName = (<HTMLInputElement>document.getElementById('fullName')).value;
    var password2 = (<HTMLInputElement>document.getElementById('password2')).value;
    if(password != password2)
    {
      this.matToast.open('Password does not match!','', {
        duration: 3000
      });
      return false;
    }
    this.sampleUser = {
      id: 0,
      email : email,
      password : password,
      fullName : fullName,
      cityId : this.selectedValueCity,
      residanceId : this.selectedValueRes,
      totalEarnings: 0,
    }
    
    this.crudService.create('Users',this.sampleUser).then(resp => {
      email = "";
      password = undefined;
      fullName = "";
      console.log(resp);
      this.router.navigateByUrl('/login');
    })
      .catch(error => {
        console.log(error);
      });
  }
}
