import { collection, addDoc  } from "firebase/firestore"; 
import { db } from "../../Config/firebaseConfig";

export  async function postData(data){
    try {
        const docRef = await addDoc(collection(db, "products"), data);
        // const documentRef = await doc(db, "products", docRef.id);
        // await updateDoc(documentRef, {
        //     id: docRef.id
        //   })
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}