import {buildContent, buildPost} from '../build-content.js';
import {readFileSync} from 'fs';
import path from 'path';

const mockedArticlePath = path.resolve('scripts', '__tests__', 'mock');

describe('BuildContent', () => {
  test('build valid content', () => {
    const buildedArticle = buildContent(mockedArticlePath);
    expect(buildedArticle).toMatchSnapshot();
  });

  test('build valid article', () => {
    const content = readFileSync(`${mockedArticlePath}/mockedArticle.md`, 'utf-8');
    const buildedArticle = buildPost(content);
    expect(buildedArticle).toMatchSnapshot();
  });
});
