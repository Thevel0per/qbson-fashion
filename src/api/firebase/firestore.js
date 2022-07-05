import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import './initializer';

// Firestore

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalData = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if(userSnapshot.exists()) return;

  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {displayName, email, createdAt, ...additionalData});
  } catch(err){
    console.error(err);
  }
};