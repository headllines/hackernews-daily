const getHeadlines = require('../utils/getHeadlines');

test('getHeadlines', async () => {
  const headlines = await getHeadlines(new Date('2020-09-06'));
  console.log(headlines)
});
