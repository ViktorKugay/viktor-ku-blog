import firebase from 'firebase/app';

export function extractFireStoreDocuments(document: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) {
  return document.docs.reduce((acc, doc) => ({...acc, [doc.id]: doc.data()}), {} as any);
}
