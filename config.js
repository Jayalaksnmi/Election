import firebase from 'firebase'




const firebaseConfig = {
  apiKey: "AIzaSyA88qlaU_gVW8uEMijKuSB8iClh7Ip-8cU",
  authDomain: "voting-8fd4f.firebaseapp.com",
  projectId: "voting-8fd4f",
  storageBucket: "voting-8fd4f.appspot.com",
  messagingSenderId: "719386669079",
  appId: "1:719386669079:web:cdf50e55d00396f8c52c52"
};


firebase.initializeApp(firebaseConfig)
export default firebase.firestore()