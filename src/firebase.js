import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
export const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);

export const uploadImageToFireBase = async (imageAsFile) => {
  console.log("start of upload");
  if (imageAsFile === "") {
    console.error(`not an image, the image file is a ${typeof imageAsFile}`);
  } else {
    const storageRef = ref(storage, `/images/${uuidv4()}`);
    const uploadTask = uploadBytesResumable(storageRef, imageAsFile);
    await uploadTask.then((snapshot) => {
      const progress =
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        default:
          break;
      }
    });
    return await getDownloadURL(uploadTask.snapshot.ref);
  }
};

export const createFireBaseAuth = async (email, password, username) => {
  let user;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });
  await updateProfile(user, { displayName: username });

  return user;
};

export const loginEmailandPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential)
    .catch((error) => error);
};
