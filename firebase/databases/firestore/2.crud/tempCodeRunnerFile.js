import { firestoreDB } from "../../../setup/setup";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";

// CREATE
// addDOC
let collectionName = "cars";

async function addUser(){
    try{
        await addDoc(collection(firestoreDB, collectionName), {
            name: "harrier", color: "black"
        })
    }catch(error){
        console.log(error.message)
    }
}

addUser();