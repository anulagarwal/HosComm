import { Component, OnInit } from '@angular/core';
 
import { CrudService } from './../service/crud.service';

import { City,Residance } from './../app.model';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  city: City;
  studentName: string;
  studentAge: number;
  studentAddress: string;
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit() {
    debugger;
    this.crudService.read('City').subscribe(data => {
 
      this.city = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['Name'],
        };
      })
      console.log(this.city);
 
    });
  }
 
  CreateRecord() {
    let record = {};
    record['Name'] = this.studentName;
    record['Age'] = this.studentAge;
    record['Address'] = this.studentAddress;
    this.crudService.create('Users',record).then(resp => {
      this.studentName = "";
      this.studentAge = undefined;
      this.studentAddress = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete('User',rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.crudService.update('User',recordRow.id, record);
    recordRow.isEdit = false;
  }
 
 
}