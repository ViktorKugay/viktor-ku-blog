import firebase from 'firebase/app';
import 'firebase/auth'; // If you need it
import 'firebase/firestore'; // If you need it
import 'firebase/storage'; // If you need it
import 'firebase/analytics'; // If you need it

var clientCredentials = {
  apiKey: 'AIzaSyCTNeDdmqEkCbPE00ZNKAjFQXWsHSqBInU',
  authDomain: 'vkugay-4f82b.firebaseapp.com',
  databaseURL: 'https://vkugay-4f82b.firebaseio.com',
  projectId: 'vkugay-4f82b',
  storageBucket: 'vkugay-4f82b.appspot.com',
  messagingSenderId: '974742954660',
  appId: '1:974742954660:web:ecfaaa1c0f841339c6fc31',
};

// Check that `window` is in scope for the analytics module!
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
  if ('measurementId' in clientCredentials) firebase.analytics();
}

export default firebase;

// class FirestoreApi {
//   private firestore: admin.firestore.Firestore;

//   constructor() {
//     // if (!firebase.apps.length) {
//     //   firebase.initializeApp(firebaseConfig);
//     // }

//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount as any),
//       databaseURL: "https://vkugay-4f82b.firebaseio.com"
//     });

//     this.firestore = admin.firestore();
//   }

//   public async incrementPostLikesCounter(postId: string): Promise<void> {
//     const postMetrics = await this.getPostMetricsByPostId(postId);
//     if (postMetrics) {
//       await this.postsCollection.doc(postId).set({likes: postMetrics.likes + 1}, {merge: true});
//     }
//   }

//   public async incrementPostViewsCounter(postId: string): Promise<void> {
//     const postMetrics = await this.getPostMetricsByPostId(postId);
//     if (postMetrics) {
//       await this.postsCollection.doc(postId).set({views: postMetrics.views + 1}, {merge: true});
//     }
//   }

//   public async getPostMetricsByPostId(postId: string): Promise<Metrics> {
//     return await this.postsCollection.doc(postId).get().then((res) => res.data()) as Metrics;
//   }

//   public async getPostsCollection(): Promise<MetricsDocument> {
//     return await this.postsCollection.get().then(extractFireStoreDocuments);
//   }

//   private get postsCollection(): admin.firestore.CollectionReference<admin.firestore.DocumentData> {
//     return this.firestore.collection('posts');
//   }
// }

// export const firestoreApi = new FirestoreApi();
