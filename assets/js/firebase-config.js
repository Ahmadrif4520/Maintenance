<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>