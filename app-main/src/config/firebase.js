import * as firebase from 'firebase';
import 'firebase/firestore';

const  config = {
    apiKey: "AIzaSyCd6KXUAqDylMrxhb8Tb-dV0tFGsiH8XJY",
    authDomain: "reactfirebase-d6865.firebaseapp.com",
    databaseURL: "https://reactfirebase-d6865.firebaseio.com",
    projectId: "reactfirebase-d6865",
    storageBucket: "reactfirebase-d6865.appspot.com",
    messagingSenderId: "888973679597"
  };

  class Firebase {
    constructor() {
      this.firebase = firebase.initializeApp(config);
    }
  
    getDatabase() {
      return this.firebase.database();
    }
  
    getFirestore() {
      return this.firebase.firestore();
    }
  }
  
  export default new Firebase();