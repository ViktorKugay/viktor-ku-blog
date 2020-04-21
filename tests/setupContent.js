const {buildContent} = require('../scripts/buildContent');
const path = require('path');

const CONTENT_DIR_PATH = path.resolve('content');

process.env.__env__ = JSON.stringify(buildContent(CONTENT_DIR_PATH));
