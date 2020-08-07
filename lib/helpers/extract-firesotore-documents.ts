export function extractFireStoreDocuments(document: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>) {
  return document.docs.reduce((acc, doc) => ({...acc, [doc.id]: doc.data()}), {} as any);
}
