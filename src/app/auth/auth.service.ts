import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  } 

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/recipes']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            )
            console.log(response);
        }
      )
      .catch(
        error => console.log(error)
      )
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signup']);
  }


  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
      return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}