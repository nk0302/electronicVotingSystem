import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxL8yQM8aRswdYgcFje8KoWDvLCFouPBg",
  authDomain: "electronicvotingsystem-783e4.firebaseapp.com",
  databaseURL: "https://electronicvotingsystem-783e4-default-rtdb.firebaseio.com",
  projectId: "electronicvotingsystem-783e4",
  storageBucket: "electronicvotingsystem-783e4.appspot.com",
  messagingSenderId: "69059851030",
  appId: "1:69059851030:web:a639853580f0017c249637"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);