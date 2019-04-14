import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GroceryStore, Residance, Visit } from '../app.model';
import { CrudService } from '../app.service';
import { MapperService } from '../mapper.service';

@Component({
  selector: 'app-visit-selector',
  templateUrl: './visit-selector.component.html',
  styleUrls: ['./visit-selector.component.scss'],
})

export class VisitSelectorComponent implements OnInit {
  storeId:     any;
  residanceId: any;
  stores: GroceryStore[];
  residances: Residance[];
  time = {hour: 13, minute: 30};

  constructor(
    public dialogRef: MatDialogRef<VisitSelectorComponent>,
    private crudService : CrudService,
    private mapper : MapperService,
    // @Inject(MAT_DIALOG_DATA) public stores: GroceryStore[],
    // @Inject(MAT_DIALOG_DATA) public residances: Residance[]
    ) { }

  ngOnInit() {
    // this.crudService.read('GroceryStores').subscribe(data => {
    //   this.stores = this.mapper.mapStores(data);
    //   console.log(this.stores);
    // });
    // this.crudService.read('Residances').subscribe(data => {
    //   this.residances = this.mapper.mapResidances(data);
    //   console.log(this.residances);
    // });
  }

}
