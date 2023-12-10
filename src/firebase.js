import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyA1LqBcJDAbNZJAzPoZX7qz0kHww0iShbk",
    authDomain: "fir-test-5c96f.firebaseapp.com",
    projectId: "fir-test-5c96f",
    storageBucket: "fir-test-5c96f.appspot.com",
    messagingSenderId: "41451836622",
    appId: "1:41451836622:web:4cc4327947cc3e767c2c9f",
    measurementId: "G-85S4TM3KFK"
};

const app = initializeApp(firebaseConfig)

export default app;