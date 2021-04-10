import firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYUl0pVM-yUiESWwGmv7sZTqlfriMdeT0",
  authDomain: "the-goblin-society-74e94.firebaseapp.com",
  databaseURL: "https://the-goblin-society-74e94.firebaseio.com",
  projectId: "the-goblin-society-74e94",
  storageBucket: "the-goblin-society-74e94.appspot.com",
  messagingSenderId: "556181460603",
  appId: "1:556181460603:web:45b678a7607f72c07674de",
  measurementId: "G-0M2S4S3674"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

export default database;
