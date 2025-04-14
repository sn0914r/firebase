import { firestoreDB } from "../../../setup/setup.js";
import { collection, doc, addDoc, setDoc, getDocs } from "firebase/firestore";

// CREATE
// addDOC
let collectionName = "cars";

async function addUser(){
    try{
        const docRef = await addDoc(collection(firestoreDB, collectionName), {
            name: "harrier", color: "black"
        })
        console.log(`doc id: ${docRef.id}`) // id
        console.log(`doc collection: ${docRef.parent.id}`) // collection name
        console.log(`doc path: ${docRef.path}`) // collection name/id
    }catch(error){
        console.log(error.message)
    }
}

// addUser();

async function setUser(){
    try{
        const res = await setDoc(doc(firestoreDB, "cars", "TataCars"),{
            name: "Altroz", color: "yellow"
        })
        console.log(`value of setDoc: ${res}`) // undefined/null
    }catch(error){
        console.log("errorL: ", error.message)
    }
}

// setUser()

// READ
// getDocs()

async function getUsers(){
    try{
        const querySnapshot = await getDocs(collection(firestoreDB, collectionName));
        console.log(querySnapshot.docs[0].id)
    }catch(error){
        console.log(`error: ${error.message}`)
    }
}

getUsers()