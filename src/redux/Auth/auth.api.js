import { auth, db } from "../../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

const userRef = collection(db, "users");
const AdminRef = collection(db, "Admin");

export const AddUserApi = async (cred) => {
  let res = await createUserWithEmailAndPassword(
    auth,
    cred.email,
    cred.password
  );
  let res2 = await addDoc(userRef, {
    firstname: cred.firstname,
    laststname: cred.laststname,
    email: cred.email,
  });

  console.log(res);
  console.log(res2);

  return res._tokenResponse;
};

export const LoginApi = async (cred) => {
  let res = await signInWithEmailAndPassword(auth, cred.email, cred.password);
  return res._tokenResponse;
};

export const LogoutApi = async () => {
  let res = await auth.signOut();

  return 1;
};

export const GetAllUseresAPI = async () => {
  let res = await getDocs(userRef);
  console.log(res.docs);
  return res.docs;
};

export const DeleteUserAPI = async (id) => {
  const userDet = doc(db, "users", id);
  let res = await deleteDoc(userDet);

  return res;
};

export const AddAdminApi = async (cred) => {
  let res2 = await addDoc(AdminRef, {
    name: cred.name,
    email: cred.email,
    password: cred.password,
    designation: cred.designation,
  });

  return res2;
};

export const GetAllAdminAPI = async () => {
  let res = await getDocs(AdminRef);
  console.log(res.docs);
  return res.docs;
};

export const DeleteAdmin = async () => {};
