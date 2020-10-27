import {PostMetrics, PostId} from '../types/types';
import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

import {FirestoreApiMock} from './mocks/firestore.api';

class FirestoreApi {
  private firestore: firebase.firestore.Firestore;

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(JSON.parse(process.env.FIRESTORE_CREDENTIALS as any));
    }

    this.firestore = firebase.firestore();
  }

  // public

  public async incrementPostLikes(postId: string): Promise<void> {
    const postMetrics = await this.getPostMetricsByPostId(postId);
    if (postMetrics) {
      await this.metricsCollection.doc(postId).set({likes: postMetrics.likes + 1}, {merge: true});
    }
  }

  public async incrementPostViews(postId: string): Promise<void> {
    const postMetrics = await this.getPostMetricsByPostId(postId);
    if (postMetrics) {
      await this.metricsCollection.doc(postId).set({views: postMetrics.views + 1}, {merge: true});
    }
  }

  public async getPostsMetrics(): Promise<Record<PostId, PostMetrics>> {
    return await this.metricsCollection.get().then(mapFireStoreDocuments);
  }

  // private

  private async getPostMetricsByPostId(postId: string): Promise<PostMetrics> {
    const metricsRow = await this.metricsCollection.doc(postId).get();

    return metricsRow.data() as PostMetrics;
  }

  private get metricsCollection(): firebase.firestore.CollectionReference<
    firebase.firestore.DocumentData
  > {
    return this.firestore.collection('metrics');
  }
}

export function mapFireStoreDocuments(
  documents: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
): Record<PostId, PostMetrics> {
  return documents.docs.reduce((acc, doc) => ({...acc, [doc.id]: doc.data()}), {}) as any;
}

// export const firestoreApi = new FirestoreApiMock();

export const firestoreApi = new FirestoreApi();
