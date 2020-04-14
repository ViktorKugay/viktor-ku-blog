const {buildContent} = require('../scripts/buildContent');
const path = require('path');

const CONTENT_DIR_PATH = path.resolve('content');

if (process.env.NODE_ENV === 'test') {
  window.scrollTo = () => {}; // not implemented in jsdom
  const env = buildContent(CONTENT_DIR_PATH);
  process.env.__env__ = JSON.stringify(env); //setup content to __env__
}
