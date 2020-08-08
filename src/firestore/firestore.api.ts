import {extractFireStoreDocuments} from './helpers/extract-firesotore-documents';
import {PostsMetricsSourceMap, PostMetrics} from '../types/types';
import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

var clientCredentials = {
  apiKey: 'AIzaSyCTNeDdmqEkCbPE00ZNKAjFQXWsHSqBInU',
  authDomain: 'vkugay-4f82b.firebaseapp.com',
  databaseURL: 'https://vkugay-4f82b.firebaseio.com',
  projectId: 'vkugay-4f82b',
  storageBucket: 'vkugay-4f82b.appspot.com',
  messagingSenderId: '974742954660',
  appId: '1:974742954660:web:ecfaaa1c0f841339c6fc31',
};

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
      await this.metricsCollection.doc(postId).set({likes: postMetrics.likes + 1}, {merge: true});
    }
  }

  public async incrementPostViewsCounter(postId: string): Promise<void> {
    const postMetrics = await this.getPostMetricsByPostId(postId);
    if (postMetrics) {
      await this.metricsCollection.doc(postId).set({views: postMetrics.views + 1}, {merge: true});
    }
  }

  public async getPostMetricsByPostId(postId: string): Promise<PostMetrics> {
    const metricsRow = await this.metricsCollection.doc(postId).get();

    return metricsRow.data() as PostMetrics;
  }

  public async getPostsMetricsSourceMap(): Promise<PostsMetricsSourceMap> {
    return await this.metricsCollection.get().then(extractFireStoreDocuments);
  }

  private get metricsCollection(): firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
    return this.firestore.collection('metrics');
  }
}

export const firestoreApi = new FirestoreApi();
