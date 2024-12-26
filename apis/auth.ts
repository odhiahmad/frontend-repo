import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbc-MKnme5pfkusdBJaSA2GxUaNrw_L8w",
  authDomain: "backend-repo-f4fe1.firebaseapp.com",
  projectId: "backend-repo-f4fe1",
  storageBucket: "backend-repo-f4fe1.firebasestorage.app",
  messagingSenderId: "561331173454",
  appId: "1:561331173454:web:4b2fa66da9d925d2ab6b1f",
  measurementId: "G-18JQX1RGV4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken(); // Get the Firebase ID token
    console.log("Firebase ID Token:", token);
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
};
