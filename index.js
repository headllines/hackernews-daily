const getHeadlines = require('./utils/getHeadlines');
const issue = require('./utils/issue');

// run every day at 00:01 UTC
const run = async (date) => {
  const contents = await getHeadlines(date);
  console.log(contents)
  issue.open({
    owner: 'headllines',
    repo: 'hackernews-daily',
    title: `Hacker News Daily Top 10 @${new Date(date).toISOString().slice(0, 10)}`,
    body: contents
  })
}

run(new Date());
