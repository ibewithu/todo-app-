import firebase from "firebase";
import 'firebase/firestore'

var firebaseConfig = {
        apiKey: "AIzaSyDQllxphXxBWoBlu2mbBRlLb8HYW6p-dcY",
        authDomain: "todo-list-28e0d.firebaseapp.com",
        projectId: "todo-list-28e0d",
        storageBucket: "todo-list-28e0d.appspot.com",
        messagingSenderId: "659557906041",
        appId: "1:659557906041:web:c746299c8cad9593b446a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig