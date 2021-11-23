import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "AIzaSyCgoZ-2ntgI4ZofoXCQ6VtAlJjtyzj92TQ",
  authDomain: "alterra-project.firebaseapp.com",
  projectId: "alterra-project",
  storageBucket: "alterra-project.appspot.com",
  messagingSenderId: "914135951453",
  appId: "1:914135951453:web:b4494529c4e3ca3b9ac5b4",
  measurementId: "G-GYZ3N9Y13K",
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

export const createFireBaseAuth = async (email, password) => {
  let check;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      check = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });
  return check;
};

export const loginEmailandPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential)
    .catch((error) => error);
};
