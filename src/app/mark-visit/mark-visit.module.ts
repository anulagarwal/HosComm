import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MarkVisitPage } from './mark-visit.page';
import { MatSelectModule, MatInputModule, MatButtonModule, MatSnackBarModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: MarkVisitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MarkVisitPage]
})
export class MarkVisitPageModule {}
