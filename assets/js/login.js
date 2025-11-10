const btnLogin = document.getElementById("btnLogin");
const btnGoogle = document.getElementById("btnGoogle");

btnLogin.onclick = () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, pass)
        .then(user => redirectByRole(user.user.uid))
        .catch(err => alert(err.message));
};

btnGoogle.onclick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            checkUserExistOrCreate(user);  // Buat data Firestore untuk pertama kali login Google
        })
        .catch(err => alert(err.message));
};

function checkUserExistOrCreate(user) {
    const ref = db.collection("users").doc(user.uid);

    ref.get().then(doc => {
        if (!doc.exists) {
            ref.set({
                fullname: user.displayName,
                email: user.email,
                role: "user"
            });
        }
        redirectByRole(user.uid);
    });
}

function redirectByRole(uid) {
    db.collection("users").doc(uid).get().then(doc => {
        const role = doc.data().role;

        if (role === "admin") {
            window.location.href = "kpi_dashboard.html";
        } else {
            window.location.href = "log_laporan.html";
        }
    });
}
