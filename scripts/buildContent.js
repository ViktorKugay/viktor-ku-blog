const {readFileSync, readdirSync, writeFileSync} = require('fs');
const frontmatter = require('front-matter');
const Showdown = require('showdown');
const path = require('path');

const converter = new Showdown.Converter();

const outputFilePath = path.resolve('content.json');

const contentDirPath = path.resolve('content');

main();

function main() {
  const articlesDirMap = readdirSync(contentDirPath);

  const articles = [];

  for (const articleName of articlesDirMap) {
    if (isArticle(articleName)) {
      const articlePath = `${contentDirPath}/${articleName}`;
      const markdownArticle = readFileSync(articlePath, 'utf-8');
      const jsonArticle = frontmatter(markdownArticle);
      const htmlArticle = converter.makeHtml(jsonArticle.body);
      articles.push({...jsonArticle, html: htmlArticle});
    }
  }

  writeFileSync(outputFilePath, stringify(articles));
}

function stringify(data) {
  return JSON.stringify(data, null, 2);
}

function isArticle(path) {
  return /.md$/.test(path);
}
