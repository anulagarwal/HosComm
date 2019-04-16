import { Component, OnInit } from '@angular/core';
import { CrudService } from '../app.service';
import { MapperService } from '../mapper.service';
import { GroceryStore, Residance, Visit, User } from '../app.model';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-visit',
  templateUrl: './mark-visit.page.html',
  styleUrls: ['./mark-visit.page.scss'],
})
export class MarkVisitPage implements OnInit {
  storeId:     any;
  residanceId: any;
  userId: string;
  stores: GroceryStore[];
  residances: Residance[];
  newVisit: Visit;
  user: User;
  timeOfVisit: any;

  constructor(
    private crudService : CrudService,
    private mapper : MapperService,
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
    this.crudService.read('GroceryStore').subscribe(data => {
      this.stores = this.mapper.mapStores(data);
      console.log(this.stores);
    });
    this.crudService.read('Residance').subscribe(data => {
      this.residances = this.mapper.mapResidances(data);
      console.log(this.residances);
    });
    this.storage.get('user').then((val) => {
      this.userId = val;
    });
  }

  addVisit(){
    this.newVisit = {
      userId:        this.userId, //this.user.id,
      groceryStoreId: this.storeId,
      residanceId:   this.residanceId,
      timeOfVisit:   this.timeOfVisit,
    }
    this.crudService.create('Visits',this.newVisit).then(resp => {
      this.router.navigateByUrl('/home'); //Pass Success  Message that toast up in login screen.      
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
    console.log(this.newVisit);
  }
}
