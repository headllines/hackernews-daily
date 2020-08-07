const dayjs = require('dayjs');
const generateHeadlinesOfDate = require('./generateHeadlinesOfDate');

// run every day at 00:01 UTC
const yesterday = dayjs().subtract(1, 'day').toDate();
generateHeadlinesOfDate(yesterday);
