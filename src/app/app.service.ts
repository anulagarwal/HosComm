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

  delete(model, recordId) {
    this.firestore.doc(model + '/' + recordId).delete();
  }

  login(model,record){
      return this.firestore.collection(model, ref => ref.where('email', '==', record.email).where('password', '==', record.password)).snapshotChanges();
  }

  checkEmail(model,record){
    return this.firestore.collection(model, ref => ref.where('email', '==', record.email)).snapshotChanges();
}

  getUser(model,record){
    return this.firestore.doc(model + '/' + record.userId).snapshotChanges();
}
}