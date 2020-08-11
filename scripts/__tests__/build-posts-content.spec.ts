import {buildPostsContent} from '../build-posts-content';
import {resolve} from 'path';

const INPUT_POSTS_MOCK_PATH_VALID = resolve('scripts', '__tests__', 'mock-valid');
const INPUT_POSTS_MOCK_PATH_INVALID = resolve('scripts', '__tests__', 'mock-invalid');

describe('BuildContent', () => {
  describe('when posts has valid content', () => {
    it('should build valid json', () => {
      const buildedArticle = buildPostsContent(INPUT_POSTS_MOCK_PATH_VALID);
      expect(buildedArticle).toMatchSnapshot();
    });

    it('should has valid attributes', () => {
      const [buildedArticle] = buildPostsContent(INPUT_POSTS_MOCK_PATH_VALID);
      expect(buildedArticle.attributes.id).toBeDefined();
      expect(buildedArticle.attributes.title).toBeDefined();
      expect(buildedArticle.attributes.description).toBeDefined();
      expect(buildedArticle.attributes.image).toBeDefined();
      expect(buildedArticle.attributes.date).toBeDefined();
    });
  });

  describe('when post has no required attributes', () => {
    it('should throw assertion error', () => {
      try {
        buildPostsContent(INPUT_POSTS_MOCK_PATH_INVALID);
        expect('this code').toBe('never executed');
      } catch (e) {
        expect(e.message).toBe('ID');
      }
    });
  });
});
