// @See https://community.netlify.com/t/using-next-js-as-a-static-site-generator-for-netlify/3391
// parses a folder of markdown files into objects. very handy!
const jdown = require('jdown');

module.exports = {
  exportPathMap: async function () {
    const paths = {
      '/': {page: '/'},
    };
    // dynamic, data-generated pages
    const content = await jdown('posts'); // assumes some markdown files in a `/content` folder, with frontmatter that offers a slug
    Object.entries(content).forEach(([filename, fileContent]) => {
      // the filename becomes the slug
      paths[`/post/${filename}`] = {
        page: '/post/[postname]',
        query: {
          slug: filename,
          ...fileContent,
        },
      };
    });
    return paths;
  },
};
