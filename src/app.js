//const functions = require("firebase-functions");
// const { initializeApp, applicationDefault } = require("firebase-admin/app");
// const { getFirestore } = require("firebase-admin/firestore");
const express = require("express");
const cors = require("cors");

// admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
//     databaseURL: "https://api-axios-c669a-default-rtdb.firebaseio.com",
//   });
// initializeApp({
//     credential: applicationDefault(),
//     databaseURL: "https://api-axios-c669a-default-rtdb.firebaseio.com",
//   });

// const db = getFirestore();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(require("./routes/index.js"));
app.listen(3000);