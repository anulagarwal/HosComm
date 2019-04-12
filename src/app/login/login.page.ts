import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapperService } from '../mapper.service';
import { CrudService } from '../app.service';
import { User,Visit } from '../app.model';
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
  constructor(private crudService: CrudService, private mapper:MapperService,private router: Router) { }

  ngOnInit() {
    this.loadVisitList();
  }
  loginUser(){
      let record = {};
      record['email'] =  (<HTMLInputElement>document.getElementById('email')).value;
      record['password'] = (<HTMLInputElement>document.getElementById('password')).value;

      this.crudService.login('Users',record).subscribe(data => {

        this.sampleUser = this.mapper.mapUsers(data);
        console.log(this.sampleUser);

      });

  }
  addVisit(){
    
    this.tempVisit = {
      userId:        '1MsCdMka7wFKyx38B4gY',
      goceryStoreId: '',
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
  
  loadVisitList(){
    this.crudService.read('Visits').subscribe(data => {
 
      this.tempVisits = this.mapper.mapVisits(data);
      for(var i = 0; i < this.tempVisits.length; i++)
      {
        if(this.tempVisits[i].userId != null && this.tempVisits[i].userId != '')
        {
          this.crudService.getUser('Users',this.tempVisits[i]).subscribe(data => {
            console.log(data);
            this.sampleUsers[i] = this.mapper.mapUsers(data);
            console.log(this.sampleUsers);
          });
        }
      }
    });
  }
}
