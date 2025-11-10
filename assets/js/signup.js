import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { doc, setDoc } 
  from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Simpan role default user
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: email,
      role: "user",
      createdAt: new Date()
    });

    alert("Akun berhasil dibuat!");
    window.location.href = "login.html";
  } catch (error) {
    alert(error.message);
  }
});
