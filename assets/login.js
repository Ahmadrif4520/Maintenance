firebase.auth().signInWithEmailAndPassword(email, password)
  .then(userCredential => {
    const uid = userCredential.user.uid;
    return firebase.firestore().collection('users').doc(uid).get();
  })
  .then(doc => {
    const role = doc.data().role;
    if (role === 'admin') {
        window.location.href = 'kpi_dashboard.html';
    } else {
        window.location.href = 'log_laporan.html';
    }
  })
  .catch(error => console.error(error));
