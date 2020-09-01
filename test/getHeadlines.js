const getHeadlines = require('../utils/getHeadlines');

test('getHeadlines', async () => {
  const headlines = await getHeadlines(new Date());
  console.log(headlines)
});
