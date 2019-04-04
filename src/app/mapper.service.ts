import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor() { }

  mapUsers(data){
    return data.map(e => {
      return {
        id: e.payload.doc.id,
        email: e.payload.doc.data()['email'],
        password: e.payload.doc.data()['password'],
        fullName: e.payload.doc.data()['fullName'],
        cityId: e.payload.doc.data()['cityId'],
        residanceId: e.payload.doc.data()['residanceId'],
        totalEarnings: e.payload.doc.data()['totalEarnings'],
      }
    });
  }

  mapStores(data){
    return data.map(e => {
      return {
        id: e.payload.doc.id,
        cityId:  e.payload.doc.data()['cityId'],
        name:    e.payload.doc.data()['name'],
        address: e.payload.doc.data()['address'],
      }
    });
  }

  mapCities(data){
    return data.map(e => {
      return {
        id:    e.payload.doc.id,
        name: e.payload.doc.data()['name']
      };
    });
  }

  mapResidances(data){
    return data.map(e => {
      return {
        id: e.payload.doc.id,
        cityId:  e.payload.doc.data()['cityId'],
        name:    e.payload.doc.data()['name'],
        address: e.payload.doc.data()['address'],
      }
    });
  }

  mapVisits(data){
    return data.map(e => {
      return {
        id: e.payload.doc.id,
        userId:  e.payload.doc.data()['userId'],
        goceryStoreId:    e.payload.doc.data()['goceryStoreId'],
        residanceId: e.payload.doc.data()['residanceId'],
        timeOfVisit: e.payload.doc.data()['timeOfVisit'],
      }
    });
  }

  mapChat(data){
    return data.map(e => {
      return {
        id: e.payload.doc.id,
        visitId:  e.payload.doc.data()['visitId'],
        message:    e.payload.doc.data()['message'],
        sender: e.payload.doc.data()['sender'],
        pair: e.payload.doc.data()['pair'],
        time: e.payload.doc.data()['time'],
      }
    });
  }

}