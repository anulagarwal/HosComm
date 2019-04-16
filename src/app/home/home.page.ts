import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapperService } from '../mapper.service';
import { CrudService } from '../app.service';
import { User,Visit } from '../app.model';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  visits : Visit[];
  constructor(private crudService: CrudService, private mapper:MapperService,private router: Router,private storage: Storage) { }

  ngOnInit() {
    this.loadVisitList();
  }
  loadVisitList(){
    this.crudService.read('Visits').subscribe(data => {
      this.visits = this.mapper.mapVisits(data);
      console.log(this.visits);
    });
  }
}
