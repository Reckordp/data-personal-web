// import { doc, setDoc } from "firebase/firestore"

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// firebase = require("firebase")
// require("firebase/firestore")

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD49FjesWjY-hb5YbR7IGn1jn_upXWiYgE",
  authDomain: "data-personal12232211122.firebaseapp.com",
  projectId: "data-personal12232211122",
  storageBucket: "data-personal12232211122.appspot.com",
  messagingSenderId: "542073984185",
  appId: "1:542073984185:web:e87f82bb238496ec93b768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore()

document.onload((evt) => {
  document.getElementById("selesai").addEventListener("click", (ev) => {
    db.collection("data-personal").doc().set({
      namaLengkap: document.getElementById("namaLengkap").value, 
      email: document.getElementById("email").value, 
      nomerTelepon: document.getElementById("nomerTelpon").value, 
      tempatLahir: document.getElementById("tempatLahir").value, 
      tanggalLahir: document.getElementById("tanggalLahir").value, 
      jenisKelamin: document.getAnimations("jenisKelamin").value
    })
  })
})