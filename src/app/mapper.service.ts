import { Injectable } from '@angular/core';
import { User, GroceryStore, Visit, City, Residance, Chat } from  './app.model';

@Injectable({
  providedIn: 'root'
})
export class MapperService {
  user : User;
  store : GroceryStore;
  visit : Visit;
  city : City;
  residance : Residance;
  chat : Chat;

  constructor() { }

  mapUsers(data){
    return data.map(e => {
      this.user = undefined;
      this.user.id = e.payload.doc.id;
      this.user.cityId = e.payload.doc.data()['cityID'];
      this.user.fullName = e.payload.doc.data()['fullName'];
      this.user.residanceId = e.payload.doc.data()['residanceID'];
      this.user.totalEarnings = e.payload.doc.data()['totalEarnings'];
      this.user.password = e.payload.doc.data()['password'];
      return this.user;
    });
  }

  mapStores(data){
    return data.map(e => {
      for (let key in this.store){
        this.store[key] = undefined;
        this.store[key] = key != 'id' ? e.payload.doc.data()[key] : e.payload.doc.id;
      }
      return this.store;
    });
  }

  mapResidances(data){
    return data.map(e => {
      for (let key in this.residance){
        this.residance[key] = undefined;
        this.residance[key] = key != 'id' ? e.payload.doc.data()[key] : e.payload.doc.id;
      }
      return this.residance;
    });
  }

}