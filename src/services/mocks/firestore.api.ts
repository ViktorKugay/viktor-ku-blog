import {PostId, PostMetrics} from '../../types/types';

export class FirestoreApiMock {
  public async incrementPostLikes(_: string): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  public async incrementPostViews(_: string): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  public async getPostsMetrics(): Promise<Record<PostId, PostMetrics>> {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            [PostId.queryString]: {
              views: 1,
              likes: 1,
            },
          }),
        1000,
      ),
    );
  }
}
