import { Component, OnInit } from '@angular/core';
import { User, City, Residance } from '../app.model';
import { MatSnackBar } from '@angular/material';
import { CrudService } from '../app.service';
import { Storage } from '@ionic/storage';
import { MapperService } from '../mapper.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userId: any;
  sampleUser: User;
  selectedValueCity: string;
  selectedValueRes: string;
  cities: City[];
  residances: Residance[];

  constructor(private matToast: MatSnackBar, private crudService: CrudService,private storage: Storage, private mapper:MapperService) { }

  ngOnInit() {
    this.crudService.read('City').subscribe(data => {
      this.cities = this.mapper.mapCities(data);
      console.log(data);
    });

    this.crudService.read('Residance').subscribe(data => {
      this.residances = this.mapper.mapResidances(data);
      console.log(data);
    });
    // set sample user from local storage
    this.storage.get('user').then((val) => {
      this.sampleUser = val[0];
    });
    
  }

  async update(){
    // Current Password is mandatory for Updates
    console.log(this.sampleUser.password);
    var password = (<HTMLInputElement>document.getElementById('password')).value;
    var newPassword = (<HTMLInputElement>document.getElementById('newPassword')).value;
    var confirmNewPassword = (<HTMLInputElement>document.getElementById('confirmNewPassword')).value;
    if(password == this.sampleUser.password){
      if(newPassword != '' && newPassword == confirmNewPassword && newPassword != this.sampleUser.password){
        this.sampleUser.password = newPassword;
      }
      else {
        this.matToast.open('Invalid password!','', {
          duration: 3000
        });
        return false;
      }
      this.sampleUser.cityId ='njbhvhgcf'; //this.selectedValueCity;
      this.sampleUser.residanceId = 'asdasda'; //this.selectedValueRes;
      this.sampleUser.totalEarnings = 123;
      console.log(this.sampleUser);
      await this.crudService.update('Users', this.sampleUser.id,this.sampleUser);
      // get user by id, set to local storage and sampleUser Object
      this.storage.set('user',this.sampleUser);
    }
    else {
      this.matToast.open('Incorrect Password!','', {
        duration: 3000
      });
    }
  }

}
