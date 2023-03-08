import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyANUVnNDfuPuGpVX6Lfio_7spxQIkq8_8A",
  authDomain: "vanlife-75563.firebaseapp.com",
  projectId: "vanlife-75563",
  storageBucket: "vanlife-75563.appspot.com",
  messagingSenderId: "429711221115",
  appId: "1:429711221115:web:8370b7388b15f1829e5dde",
  measurementId: "G-L0BB00SK56"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getAllVans() {
  const querySnapshot = await getDocs(vansCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return dataArr
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const vanSnapshot = await getDoc(docRef)
  console.log("Firebase")
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id
  }
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const querySnapshot = await getDocs(q)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return dataArr
}