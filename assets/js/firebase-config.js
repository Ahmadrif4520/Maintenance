const firebaseConfig = {
    apiKey: "AIzaSyDjB3h7EsI-A7B56bkgvcKDVgvMJYSCjPU",
    authDomain: "chinaglaze-app.firebaseapp.com",
    databaseURL: "https://chinaglaze-app-default-rtdb.firebaseio.com",
    projectId: "chinaglaze-app",
    storageBucket: "chinaglaze-app.firebasestorage.app",
    messagingSenderId: "546767539175",
    appId: "1:546767539175:web:c67b1cd90638e8cc4fcb42",
    measurementId: "G-6PZN326DJ0"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();