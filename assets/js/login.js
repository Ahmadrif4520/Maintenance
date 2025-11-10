// login.js
import { auth } from "./firebase-config.js";
import { 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// ==============================
// LOGIN EMAIL & PASSWORD
// ==============================
const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Login email sukses:", userCredential.user);

            window.location.href = "dashboard.html"; // redirect setelah login
        } catch (error) {
            alert("Login gagal: " + error.message);
        }
    });
}



// ==============================
// LOGIN GOOGLE
// ==============================
const googleBtn = document.getElementById("google-login");

if (googleBtn) {
    googleBtn.addEventListener("click", async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Login Google sukses:", result.user);

            window.location.href = "dashboard.html";
        } catch (error) {
            alert("Login Google gagal: " + error.message);
        }
    });
}
