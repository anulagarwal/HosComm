import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CrudService } from '../app.service';
import { Router } from '@angular/router';
import { MapperService } from '../mapper.service';
import {City, Residance, User} from '../app.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  sampleUser : User;
  oldUser : User;
  cities: City[];
  residances: Residance[];
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

    this.sampleUser = {
      email : '',
      password : '',
      fullName : '',
      cityId : '',
      residanceId : '',
      totalEarnings: 0,
    }
  }
  registerNotification() {
    var password2 = (<HTMLInputElement>document.getElementById('password2')).value;
    if(this.sampleUser.password != password2)
    {
      this.matToast.open('Password does not match!','', {
        duration: 3000
      });
      return false;
    }
    this.sampleUser.cityId = this.selectedValueCity;
    this.sampleUser.residanceId = this.selectedValueRes;

    this.crudService.checkEmail('Users',this.sampleUser).subscribe(data => {
      if(data.length != 0)
      {
        this.matToast.open('User already exists with this email!','', {
          duration: 3000
        });
        this.oldUser = {
          email : '',
          password : '',
          fullName : '',
          cityId : '',
          residanceId : '',
          totalEarnings: 0,
        }
        return false;
      }
      else
      {
        this.crudService.create('Users',this.sampleUser).then(resp => {
          console.log(resp);
          this.router.navigateByUrl('/login'); //Pass Success  Message that toast up in login screen.
        }).catch(error => {
          console.log(error);
        });
        this.sampleUser = {
          email : '',
          password : '',
          fullName : '',
          cityId : '',
          residanceId : '',
          totalEarnings: 0,
        }
        return false;
      }
    });
    
  }
}
