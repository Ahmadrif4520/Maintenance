document.getElementById("btnSignup").onclick = () => {
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, pass)
        .then(result => {
            const uid = result.user.uid;

            return db.collection("users").doc(uid).set({
                fullname: fullname,
                email: email,
                role: "user"
            });
        })
        .then(() => {
            alert("Pendaftaran berhasil, silakan login.");
            window.location.href = "login.html";
        })
        .catch(err => alert(err.message));
};
