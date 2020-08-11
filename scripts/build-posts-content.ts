import {PostContentSourceMap, PostCustomAttributes} from '../src/types/types';
import {readFileSync, readdirSync, writeFileSync} from 'fs';
import frontmatter from 'front-matter';
import Showdown from 'showdown';
import {resolve} from 'path';
import assert from 'assert';

const converter = new Showdown.Converter();

const INPUT_PATH = resolve('posts');
const OUTPUT_PATH = resolve('posts.json');

buildPostsContent();

export function buildPostsContent(input: string = INPUT_PATH): PostContentSourceMap[] {
  const postsDirSourceMap = readdirSync(input);
  const postsContentList = postsDirSourceMap.reduce(postContentBuilder(input), []);

  if (!isTest()) {
    writeFileSync(OUTPUT_PATH, stringify(postsContentList));
  }

  return postsContentList;
}

function postContentBuilder(input: string) {
  return (acc: PostContentSourceMap[], postPath: string) => {
    if (isPost(postPath)) {
      const postContentMd = readFileSync(resolve(input, postPath), 'utf-8');

      const postContentJson = frontmatter<PostCustomAttributes>(postContentMd);
      const postContentHtml = converter.makeHtml(postContentJson.body);

      validatePostAttributes(postContentJson.attributes);

      acc.push({...postContentJson, html: postContentHtml});
    }

    return acc;
  };
}

function validatePostAttributes(attributes: PostCustomAttributes): void {
  const {id, image, title, description, date} = attributes;

  assert(id, 'ID');
  assert(image, 'IMAGE');
  assert(title, 'TITLE');
  assert(description, 'DESCRIPTION');
  assert(date, 'DATE');
}

function isTest(): boolean {
  return process.env.NODE_ENV === 'test';
}

function stringify(data: object): string {
  return JSON.stringify(data, null, 2);
}

function isPost(path: string): boolean {
  return /.md$/.test(path);
}
