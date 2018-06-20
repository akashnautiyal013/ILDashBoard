



import * as firebase from 'firebase'
let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyA-9q4MjzeM-7_MJRDkyeaaWM62VyCPxBo",
    authDomain: "impact-league.firebaseapp.com",
    databaseURL: "https://impact-league.firebaseio.com",
    projectId: "impact-league",
    storageBucket: "impact-league.appspot.com",
    messagingSenderId: "153796277156"
  };
  firebase.initializeApp(config)
  database = firebase.database()
}