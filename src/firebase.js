import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBgOgxlFRtRwP-Yc_r3K27zuh0gssy-Gfs",
  authDomain: "fir-react-auth-eb2c3.firebaseapp.com",
  projectId: "fir-react-auth-eb2c3",
  storageBucket: "fir-react-auth-eb2c3.appspot.com",
  messagingSenderId: "264518628230",
  appId: "1:264518628230:web:4e73bcc45f8fe88db47207"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
