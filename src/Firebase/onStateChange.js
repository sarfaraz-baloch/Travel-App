import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./Firebase";
const onStatechange = ()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
          cosnole.log('user sign in')
        } else {
          // User is signed out
          // ...
          console.log('user sign out')
        }
      });
}

export default onStatechange;