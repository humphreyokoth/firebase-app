
import { collection, addDoc } from "firebase/firestore"; 

export async function postData(data){
    try {
        const docRef = await addDoc(collection(db, "todo"),data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
    }
}


// export async function postData(data){
// const docRef = await addDoc(collection(db,"todo"),data)
// if(!docRef.id) return new Error('An error occured while creating an event')



// }