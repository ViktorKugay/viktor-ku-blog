import {PostsMetricsSourceMap} from '../../types/types';

export function extractFireStoreDocuments(
  documents: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
): PostsMetricsSourceMap {
  return documents.docs.reduce((acc, doc) => ({...acc, [doc.id]: doc.data()}), {});
}
