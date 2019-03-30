import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CrudService } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  sampleUser : any;
  cities: any;
  selecCities: any;

  constructor( private matToast: MatSnackBar ,private crudService: CrudService,private router: Router) { }

  ngOnInit() {
    this.crudService.read('City').subscribe(data => {
 
      this.cities = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
        };
      })
      console.log(this.cities[0].Name);
      console.log(this.cities[1].Name);
      console.log(this.cities.length);
      this.selecCities = this.cities;
    });
    var select = document.getElementById('city');

    for (var i = 0; i<=this.selecCities.length; i++){
        var opt = document.createElement('option');
        opt.value = this.selecCities[i].Name;
        opt.innerHTML = this.selecCities[i].Name;
        select.appendChild(opt);
    }
  }

  registerNotification() {
    let record = {};
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
    // var email = (<HTMLInputElement>document.getElementById('email')).value;
    record['email'] = email;
    record['password'] = password;
    record['fullName'] = fullName;
    this.crudService.create('Users',record).then(resp => {
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
