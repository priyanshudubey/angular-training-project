import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Users } from '../shared/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private firestore: AngularFirestore) { }
  userList: AngularFireList<any>;
  patientCollection = this.firestore.collection('patients');


  form = new FormGroup({
    $key : new FormControl(null),
    name : new FormControl('', Validators.required),
    dob : new FormControl('', [Validators.required]),
    gender : new FormControl('', Validators.required),
    birthPlace : new FormControl('', Validators.required),
    bloodGroup : new FormControl('', Validators.required),
    height : new FormControl('', Validators.required),
    weight : new FormControl('', Validators.required)
  });

  async putUsersFromDB(data: any):Promise<void>{
    try{
      console.log("service");
      await this.patientCollection.add(data);
    }
    catch(e){
      console.log("err");
      console.log(e);
    }
  }

  // getUsers(){
  //   this.userList = this.firebase.list('users');
  //   return this.userList.snapshotChanges()
  // }

  insertUser(user: Users){
    this.userList.push({
      name: user.name,
      dob: user.dob,
      gender: user.gender,
      birthPlace: user.birthPlace,
      bloodGroup: user.bloodGroup,
      height: user.height,
      weight: user.weight
    })
  }
}
