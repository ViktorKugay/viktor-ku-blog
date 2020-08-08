// import admin from 'firebase-admin';

// const cred = {
//   type: 'service_account',
//   project_id: 'vkugay-4f82b',
//   private_key_id: 'a7cbce64e51ec4725c156bc3a36d58cf2587b81d',
//   private_key:
//     '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrC+HruBs7tg2c\n8W/KKxpmI9nhdymP8DYtrfxT3Cwleo4LGTM1wCwLbSie1+vI8Ijpe/puwSoi67R/\n92/zyreyB6KKMABFQY9hnNYJYPcHpRiLakav9d/WQbwP24Rn8lfTLA3Q235wwNel\n/kpW3zqftuj2Hx/bBQJPor+eSRBzeVfb8j+oG6CKLlQnp+cpDbk5d9GY+HhkSP+y\nMfY8i+52ezOEQnRsKPdfHMqrpuL4pI2OBqkA0Myu2M6uiRxma57MvWOaI2ccH1lz\n2TGRozZeIahqm6vL33PVP9eA9jHb/JUkBCN3X/U27aOldoP+VvQO0TQL+jz/8/4A\nEr1j1vNZAgMBAAECggEAIZLIwsOlpswGcoSKcIiS2zMUyHZjFFNuUvuIYG6CRM4A\nNQn6fQWuL4T62OjhaVTbTtcMsjIcovOYf5iyIwxqj5mDjDO9Tdq/OcX21irv+hJs\nFatj2hR9HdlTwFoSbHPLTNIkGReIQzn66iRWc6RH5cMZiXvU/SDH0hlMGtXVEpEP\ntM+Ge1PSBBs+N3NY8PJhxBLoT+/JGyQmYP37o9jjTPnBcQZCsHgxpobYKVLlmrX+\n2ZftHySlbRLgp6Cq9pCB16q62SQAmn4rN6oU8vMl/4ewYk/TF7gbkn9aINX4tebi\nm8BMkf2eCxa6qsln0RUcc9fSgK+5q51ykQLWWuNF/QKBgQDgo8/s5sgS9El3WjEu\nBL65nYQe0yPJtKOW0wy2Fdsnyqj4ZpT5SnByv7nlPqXpAwQOm9LLCq+1PIU0nBtP\nj4VAXPdcjbSFzXlYvi/2VJaE8AxdN7WmXxI2PvuXTbz29io7eyMwBef/AGEvVcwj\niRZNf0ocvG8p3/pVSr0sSUO99QKBgQDC7L6y1u7HMe/IG1bxkyuEFI7MUtn66bY5\nuoaReXkBgDtwR9GYyhbs6zLmxpTdxIoXXDgU7SI6wuTsarFfLlM2sjD5fmDsuv0I\n/JoMvAUvv1Ca5Zlt9+zAt39jg/RY4st6r/16OeWJDXkH7PnBHzAIXpN1Ih1tvJ9o\n7USBJM+9VQKBgQCa8CFvUlXYzOkHCww0o00xFPWVlSdv7cmPM43m4PhBX8RfX9GM\nh807OAXtmeIw7sWTleIz7PD33gA6IxmrLGBJ3lU2Xv6N8wSpMrQ+AGW41yCQAual\nE5mqFJLO7u1QoMTMNcg1TT2QYiCl11VvhRP+67agT0+U4Ej3Hw+PRhEVKQKBgGt4\nJcfqcqnGoYI9eJkmYBapUvXaNC5/zqVTbsAkLhAiyCKmpivMOAmVv3G3SPpgUxaA\nFLeM6pNlQtwKExL8Mor0gcX85KmAiuP6iWC+BUoG/AT607XqvFCgmw6eAQlEuZVC\nFMnfw+rlT7aL9EOC03O52Sj6jykilu0968gcKKElAoGBANuuJe43tlJ+DBTWRd0X\nUf4547lfbMAh1D+6bm8I+WhpS+jdZwFDtlyoQgGI1a9numT2JchP72QHPAUoiX3d\nEIKbIrVf5EOGeiD5G599aXYnH6sQaRtW0RsT3m+MeYL6kilaeLzdlystiEbl5lep\nUVMBmRQFbexbWwbg+Sc4XZgK\n-----END PRIVATE KEY-----\n',
//   client_email: 'firebase-adminsdk-vn7et@vkugay-4f82b.iam.gserviceaccount.com',
//   client_id: '105940960610017640875',
//   auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//   token_uri: 'https://oauth2.googleapis.com/token',
//   auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//   client_x509_cert_url:
//     'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vn7et%40vkugay-4f82b.iam.gserviceaccount.com',
// };

// try {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: cred.project_id,
//       privateKey: cred.private_key,
//       clientEmail: cred.client_email,
//     }),
//     databaseURL: 'https://vkugay-4f82b.firebaseio.com',
//   });
// } catch (error) {
//   /*
//    * We skip the "already exists" message which is
//    * not an actual error when we're hot-reloading.
//    */
//   if (!/already exists/u.test(error.message)) {
//     // eslint-disable-next-line no-console
//     console.error('Firebase admin initialization error', error.stack);
//   }
// }

// export default admin.firestore();

import firebase from 'firebase/app';
import 'firebase/auth'; // If you need it
import 'firebase/firestore'; // If you need it
import 'firebase/storage'; // If you need it
import 'firebase/analytics'; // If you need it
import {MetricsDocument, Metrics} from './firestore.types';
import {extractFireStoreDocuments} from './helpers/extract-firesotore-documents';

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

class FirestoreApi {
  private firestore: firebase.firestore.Firestore;

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials);
    }

    this.firestore = firebase.firestore();
  }

  public async incrementPostLikesCounter(postId: string): Promise<void> {
    const postMetrics = await this.getPostMetricsByPostId(postId);
    if (postMetrics) {
      await this.postsCollection.doc(postId).set({likes: postMetrics.likes + 1}, {merge: true});
    }
  }

  public async incrementPostViewsCounter(postId: string): Promise<void> {
    const postMetrics = await this.getPostMetricsByPostId(postId);
    if (postMetrics) {
      await this.postsCollection.doc(postId).set({views: postMetrics.views + 1}, {merge: true});
    }
  }

  public async getPostMetricsByPostId(postId: string): Promise<Metrics> {
    return (await this.postsCollection
      .doc(postId)
      .get()
      .then((res) => res.data())) as Metrics;
  }

  public async getPostsMetrics(): Promise<MetricsDocument> {
    return await this.postsCollection.get().then(extractFireStoreDocuments);
  }

  private get postsCollection(): firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
    return this.firestore.collection('posts');
  }
}

export const firestoreApi = new FirestoreApi();
