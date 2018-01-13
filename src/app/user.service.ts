import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string):any {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);    
  }

  login(email: string, password: string):any {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  forgot(email:string):any{
    return this.firebaseAuth
    .auth
    .sendPasswordResetEmail(email);
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
