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
import axios from "axios";

const userRef = collection(db, "users");
const AdminRef = collection(db, "Admin");

export const AddUserApi = async (cred) => {
  try {
    let res=await axios.post(`https://frail-gold-hen.cyclic.app/users/register`,cred)
    return res.data
  } catch (error) {
    
  }

 
};

export const LoginApi = async (cred) => {
 try {
  let res= await axios.post(`https://frail-gold-hen.cyclic.app/users/login`,cred)
   
  return res.data

 } catch (error) {
  
 }
};

export const LogoutApi = async () => {
  let res = await auth.signOut();

  return 1;
};

export const GetAllUseresAPI = async () => {
  let res = await getDocs(userRef);
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
  return res.docs;
};

export const DeleteAdmin = async () => {};
