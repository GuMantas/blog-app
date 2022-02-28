import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

class Firebase {
  private config = {
    apiKey: "AIzaSyBd-1OcCFKhN-LuE-dmNnTQOoDIAAYo0is",
  authDomain: "blog-appa.firebaseapp.com",
  databaseURL: "https://blog-appa-default-rtdb.firebaseio.com",
  projectId: "blog-appa",
  storageBucket: "blog-appa.appspot.com",
  messagingSenderId: "1083677760310",
  appId: "1:1083677760310:web:2b9229e5f21ab5feb33197",
  measurementId: "G-XBH276TEPP"
  };

  private app: any;
  private database: any;

  constructor() {
    this.app = initializeApp(this.config);
    this.database = getFirestore(this.app);

  }

  get getApp() {
    return this.app;
  }

  async getTest() {
    const testCol = collection(this.database, 'test');
    const testSnapshot = await getDocs(testCol);
    const testList = testSnapshot.docs.map(doc => doc.data());
    return testList;
  }
}

export default new Firebase();
