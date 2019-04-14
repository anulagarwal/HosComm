import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { SortPipe } from '../pipes/sort.pipe';

import { IonicModule } from '@ionic/angular';

import { ChatPage } from './chat.page';
import { MatSnackBarModule, MatButtonModule, MatInputModule, MatSelectModule, MatIconModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: ChatPage
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
    MatIconModule,
    // SortPipe,
    // PipesModule,
    RouterModule.forChild(routes)
  ],
  // declarations: [ChatPage, SortPipe]
  declarations: [ChatPage]
})
export class ChatPageModule {}
