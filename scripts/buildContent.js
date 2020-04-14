const {readFileSync, readdirSync, writeFileSync} = require('fs');
const frontmatter = require('front-matter');
const Showdown = require('showdown');
const path = require('path');

const converter = new Showdown.Converter();

const outputFilePath = path.resolve('content.json');

module.exports = {
  buildContent,
  buildArticle,
};

function buildContent(contentDirPath) {
  const articlesDirMap = readdirSync(contentDirPath);
  const articles = [];

  for (const articleName of articlesDirMap) {
    if (isArticle(articleName)) {
      const articlePath = `${contentDirPath}/${articleName}`;
      const markdownArticle = readFileSync(articlePath, 'utf-8');
      articles.push(buildArticle(markdownArticle));
    }
  }

  writeFileSync(outputFilePath, stringify(articles));

  return articles;
}

function buildArticle(markdownArticle) {
  const jsonArticle = frontmatter(markdownArticle);
  const htmlArticle = converter.makeHtml(jsonArticle.body);
  return {...jsonArticle, html: htmlArticle};
}

function stringify(data) {
  return JSON.stringify(data, null, 2);
}

function isArticle(path) {
  return /.md$/.test(path);
}
