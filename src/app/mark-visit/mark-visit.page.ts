import { Component, OnInit } from '@angular/core';
import { CrudService } from '../app.service';
import { MapperService } from '../mapper.service';
import { GroceryStore, Residance, Visit, User } from '../app.model';

@Component({
  selector: 'app-mark-visit',
  templateUrl: './mark-visit.page.html',
  styleUrls: ['./mark-visit.page.scss'],
})
export class MarkVisitPage implements OnInit {
  storeId:     any;
  residanceId: any;
  stores: GroceryStore[];
  residances: Residance[];
  newVisit: Visit;
  user: User;
  timeOfVisit: any;

  constructor(
    private crudService : CrudService,
    private mapper : MapperService,
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
    // Populate logged in user from Local storage here.
  }

  addVisit(){
    this.newVisit = {
      userId:        '1MsCdMka7wFKyx38B4gY', //this.user.id,
      goceryStoreId: this.storeId,
      residanceId:   this.residanceId,
      timeOfVisit:   this.timeOfVisit,
    }

    console.log(this.newVisit);

    // this.crudService.create('Visits',this.newVisit).then(resp => {
    //   console.log(resp);
    // }).catch(error => {
    //   console.log(error);
    // });
  }
}
