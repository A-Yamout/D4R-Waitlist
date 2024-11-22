import firebase from "firebase/app";
import "firebase/firestore";

// code in this file is inspired by https://github.com/hydralite/hydralite/blob/dev/landing/util/firestoreManager.ts
const config = {
  apiKey: "AIzaSyAY0OK51rb2IEMGHLMMlaPQIFMkRkX9OD0",
  authDomain: "carrollrobotics7110team.firebaseapp.com",
  projectId: "carrollrobotics7110team",
  storageBucket: "carrollrobotics7110team.appspot.com",
  messagingSenderId: "1096477347306",
  appId: "1:1096477347306:web:29748858f118be1529f693",
  measurementId: "G-9FPXF66JLJ"
};

export default class FirestoreManager {
  initialize() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      firebase.app();
    }
  }

  validateEmail(email: string): Promise<string> {
    return new Promise(async (res, _) => {
      this.initialize();

      var collectionRef = firebase.firestore().collection("waitlist");

      await collectionRef
        .where("email", "==", email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc) res("You've already waitlisted this email.");
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (re.test(String(email).toLowerCase())) {
        res("success");
      } else {
        res("Invalid Email Address");
      }
    });
  }

  async addEmail(email: string) {
    this.initialize();

    try {
      await firebase.firestore().collection("waitlist").add({ email });
      console.log("Document successfully written!");
    } catch (err) {
      console.error(`Error writing document: ${err}`);
    }
  }
}
