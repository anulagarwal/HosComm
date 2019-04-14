import { Component, OnInit } from '@angular/core';
import { User } from '../app.model';
import { MatSnackBar } from '@angular/material';
import { CrudService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userId: any;
  sampleUser: User;
  password: string;
  newPassword: string;
  confirmNewPassword : string;
  selectedValueCity: string;
  selectedValueRes: string;

  constructor(private matToast: MatSnackBar, private crudService: CrudService) { }

  ngOnInit() {
    // set sample user from local storage
    this.sampleUser = {
      email : 'aqdasmalik@gmail.com',
      password : '1234',
      fullName : 'Aqdas Malik',
      cityId : '',
      residanceId : '',
      totalEarnings: 0,
    }
    this.userId = this.sampleUser.id;
    this.sampleUser.id = undefined;
  }

  async update(){
    // Current Password is mandatory for Updates
    if(this.password == this.sampleUser.password){
      if(this.newPassword != '' && this.newPassword == this.confirmNewPassword){
        this.sampleUser.password = this.newPassword;
      }
      else {
        this.matToast.open('New Password do not match!','', {
          duration: 3000
        });
      }
      this.sampleUser.cityId = this.selectedValueCity;
      this.sampleUser.residanceId = this.selectedValueRes;

      await this.crudService.update('User', this.userId, this.sampleUser);
      // get user by id, set to local storage and sampleUser Object
    }
    else {
      this.matToast.open('Incorrect Password!','', {
        duration: 3000
      });
    }
  }

}
