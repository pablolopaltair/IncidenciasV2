import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Roles, UserInterface } from '../modelos/rol.model';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }



/*
register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
*/

  register({ email, password }: any) {
      return new Promise((resolve, reject) => {
        this.afsAuth.createUserWithEmailAndPassword(email, password)
          .then(userData => {
            resolve(userData),
              this.updateUserData(userData.user)
          }).catch(err => console.log(reject(err)))
      });
    }
  

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }



  logout() {
    return signOut(this.auth);
  }


  updateUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.email}`);
    const data: UserInterface ={
      email: user.email,
      rol:{
        usuario: true,
        mantenimiento: false,
        directivo: false,
        admin: false
      }
    }
    return userRef.set(data, { merge: true })
  }

  isUserAdmin(usEmail) {
    return this.afs.doc<UserService>(`users/${usEmail}`).valueChanges();
  }

}
