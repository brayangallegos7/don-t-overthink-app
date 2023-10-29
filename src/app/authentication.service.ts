import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import { AngularFireAuth} from '@angular/fire/compat/auth';
import {CollectionReference,DocumentData,addDoc,collection,deleteDoc,doc,updateDoc,} from '@firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import { Firestore, collectionData, docData } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth) {

  }

  async registerUser(email: string, password: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)

  }

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);

  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);

  }
  async getProfile() {
    return await this.ngFireAuth.currentUser
  }

  async signOut() {
    return await this.ngFireAuth.signOut();
  }
  async AuthLogin(provider: any) {

    try {
      const result = await this.ngFireAuth.signInWithPopup(provider);
      //  this.ngZone.run(() => {
      //    this.router.navigate(['dashboard']);
      //  });
      //  this.SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }

  }

  async GoogleAuth() {
    const auth = getAuth();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    console.log(result);
    
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    // var token = credential?.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }





}
