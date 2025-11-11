import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } 
  from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "kpi_dashboard.html";
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById("btnGoogle").addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "kpi_dashboard.html";
  } catch (error) {
    alert(error.message);
  }
});
