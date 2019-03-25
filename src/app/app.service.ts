import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create(model, record) {
    return this.firestore.collection(model).add(record);
  }

  read(model) {
    return this.firestore.collection(model).snapshotChanges();
  }

  update(model, recordID, record){
    this.firestore.doc(model + '/' + recordID).update(record);
  }

  delete(model, record_id) {
    this.firestore.doc(model + '/' + record_id).delete();
  }

  login(model,record){
      return this.firestore.collection(model, ref => ref.where('email', '==', record.email).where('password', '==', record.password)).snapshotChanges();
  }
}