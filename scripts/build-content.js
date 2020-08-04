const {readFileSync, readdirSync, writeFileSync} = require('fs');
const frontmatter = require('front-matter');
const Showdown = require('showdown');
const path = require('path');

const converter = new Showdown.Converter();

const outputFilePath = path.resolve('content.json');

module.exports = {
  buildContent,
  buildPost,
};

buildContent();

function buildContent(contentDirPath = 'posts') {
  const postsDirMap = readdirSync(contentDirPath);
  const posts = [];

  for (const postPath of postsDirMap) {
    if (isPost(postPath)) {
      const postFullPath = `${contentDirPath}/${postPath}`;
      const markdownPost = readFileSync(postFullPath, 'utf-8');
      posts.push(buildPost(markdownPost));
    }
  }

  if (process.env.NODE_ENV !== 'test') {
    writeFileSync(outputFilePath, stringify(posts));
  }

  return posts;
}

function buildPost(markdownPost) {
  const jsonPost = frontmatter(markdownPost);
  const htmlPost = converter.makeHtml(jsonPost.body);
  return {...jsonPost, html: htmlPost};
}

function stringify(data) {
  return JSON.stringify(data, null, 2);
}

function isPost(path) {
  return /.md$/.test(path);
}
