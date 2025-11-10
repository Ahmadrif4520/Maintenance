firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const uid = userCredential.user.uid;
    return firebase.firestore().collection('users').doc(uid).set({
        fullname: fullname,
        email: email,
        role: 'user'  // default role
    });
  })
  .then(() => {
      console.log("User signed up & data saved");
  })
  .catch(error => console.error(error));
