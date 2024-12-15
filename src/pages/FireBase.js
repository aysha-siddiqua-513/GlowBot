// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { 
//   getAuth, 
//   GoogleAuthProvider, 
//   signInWithPopup, 
//   signInWithEmailAndPassword, 
//   createUserWithEmailAndPassword, 
//   updateProfile 
// } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyBaqxo4EyXjXCCaCazKiwEFoydLrTD1yLs",
//   authDomain: "glowbot-d4f44.firebaseapp.com",
//   projectId: "glowbot-d4f44",
//   storageBucket: "glowbot-d4f44.appspot.com",
//   messagingSenderId: "298022952944",
//   appId: "1:298022952944:web:a0cdaec53020d127e20735",
//   measurementId: "G-P7D95YJ47X"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const googleAuthProvider = new GoogleAuthProvider();

// export { 
//   auth, 
//   googleAuthProvider, 
//   signInWithPopup, 
//   signInWithEmailAndPassword, 
//   createUserWithEmailAndPassword, 
//   updateProfile, 
//   ref, 
//   uploadBytes, 
//   getDownloadURL 
// };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaqxo4EyXjXCCaCazKiwEFoydLrTD1yLs",
  authDomain: "glowbot-d4f44.firebaseapp.com",
  projectId: "glowbot-d4f44",
  storageBucket: "glowbot-d4f44.appspot.com",
  messagingSenderId: "298022952944",
  appId: "1:298022952944:web:a0cdaec53020d127e20735",
  measurementId: "G-P7D95YJ47X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const storage = getStorage(app); // Initialize Firebase Storage

// Function to upload profile picture and update profile
const uploadProfilePicture = async (file, user) => {
  try {
    // Create a reference to where the file will be stored
    const storageRef = ref(storage, `profilePictures/${user.uid}`);

    // Upload the file to Firebase Storage
    await uploadBytes(storageRef, file);

    // Get the file's download URL
    const downloadURL = await getDownloadURL(storageRef);

    // Update the user's profile with the photo URL
    await updateProfile(user, {
      photoURL: downloadURL
    });

    console.log("Profile picture updated successfully!");
    return downloadURL;
  } catch (error) {
    console.error("Error updating profile picture:", error);
    throw error;
  }
};

export { 
  auth, 
  googleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  uploadProfilePicture // Export the new uploadProfilePicture function
};
