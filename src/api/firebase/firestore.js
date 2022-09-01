import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';
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

export const addCollectionWithDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done!');
};

export const getCollectionWithDocuments = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const collectionDocuments = querySnapshot.docs.map(docSnapshot => docSnapshot.data());

  return collectionDocuments;
};
