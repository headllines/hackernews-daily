const axios = require('axios');
const timeago = require('timeago.js');
const { Octokit } = require("@octokit/core");
const { createAppAuth } = require("@octokit/auth-app");

/**
 * 1. Get top 10 stories on HN with most points in last 25 hours
 */
module.exports = async (date) => {
  // end of the date
  const endTime = Math.round(new Date(date).getTime() / 1000) + (24 * 60 * 60);
  // 1 hour before start of the date (save missed posts)
  const startTime = Math.round(new Date(date).getTime() / 1000) - (1 * 60 * 60);
  const res = await axios.get(`https://hn.algolia.com/api/v1/search?numericFilters=created_at_i>${startTime},created_at_i<${endTime}`);
  const top10Objs = res.data.hits.slice(0, 10);
  // console.log(top10Objs)
  const contents = top10Objs
    .map((obj, i) => {
      const { title, created_at, url, author, points, objectID, num_comments } = obj;
      return `${i + 1}. **[${title}](${url})**
${points} points by [${author}](https://news.ycombinator.com/user?id=${author}) ${timeago.format(created_at)} | [${num_comments} comments](https://news.ycombinator.com/item?id=${objectID})

`;
    }).join('');

  try {

    const octokit = new Octokit({
      authStrategy: createAppAuth,
      auth: {
        id: 75833,
        installationId: 11101003,
        clientId: "Iv1.8d2f7d117f535668",
        clientSecret: "06022b8c409a41c4fdf154c6478de80ffc4f2ddf",
        privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAzHiYgXEHhQ9xhvkHZmNINih76FpMivakGTc4D2ITDzvl/t4m
B7YKlAdo2Y3I+Ov06FBBD5Pni4Jaz23Cq7/pg5CxgvueMmth2XW0ZffVA4oA7Yzo
jBQ0/kcM2o0BFIKuHyNP5wQ8WKDU9HF5g1/lINh5IIKSfMN+zi5GfLeojVXYGrzx
/CvU7+dQH/ejV/LmhbXUASEYq5Ns5SP9+O9dNLk3eSHcYxvt1TtR+xx29O3uuRLv
ZK13e8g0eZrxFLMn20CU3UJTaPKUdJCyvkhcCLjFIEdghuBZQm19/VhgusD5TcgI
2e/oEwcdmEZVA++V4oT8mlJJP2nxZVjfDL6ocQIDAQABAoIBADXQB1MJzFDYn6hG
IgxwVLDsNrAQE9T+1HFOdxKVXS7FNOK+1INzBZWv3YhkKGBauTnq5TSUWHv+8qdk
27cX6v0VN6KhViEu4bG5qKCteQJVb6kVTJ6RMuE5EcjzEzWyruDDCmRiWP96VJGA
y9ongsYCMt67fpIXYWgiBasNKu8HD94tY5Yt6dFp1IfFJNSssD6wk4kL03Fyrz4K
H4b1ACilYcC3iE+LeLsyLnMft7TZc63pHLkP9mvlzXgyqGwDKkvc2Yihk/HwtT+w
FVVLZfogOkxYPC/zD2olgT7Zbwo3Vepk83oiSh7smCKdq2Y3NDIpvYO8yYkeL36z
fjD/ugECgYEA+OUa2WcjspAAh64IsvLkylmdESw2eOvuSRTlsZxJYHeXzVWuz+5T
CvZjE1kT+vSYhPykJOOuFv+rmCLXGhJurYBvbPUJ5lTBaVN2CoQd0g14mCxB6/OM
WEV7aQ3NsoXcWdJHfAGfVAOugxjwcjdhfoSf2HHnafIMvUAIqTSpgu0CgYEA0k7Y
sIOsd+BSgl2ar2r4MG0nNtCmwfxZIxccI0Mr0Y2NjLg1pUlFM4N93D0h+JvdH4i1
4FHJ88gpDtUZzBrLCJ4nhHEUYWPqSy7Mc+cJ1l3y7hKeQ4inIVONOPex5T8/VlBb
iQ8WGI3SUwdS1ASPmV1zZQbHxCRnSZCbxinONxUCgYA6nmLLbxImPOoTCnb8Bl7C
FYb7g2k044QUbDqIsSFK+f+jmZl5WUzvmQXOib097pt5PrM+CO14dzCnvRTiDBNL
A6O6ip+RQsbmkoSLh4Aqd4e+dzXzZ0HXjE27eUfH0uUJto+lchBfThqsv5Ppoodw
r7Wh2XnCJwK/E7S2fTOrJQKBgQCJh/p45IMjGdWbX29LDB8mPBuK40RKU6ZPJkvG
W6UKMxHAVq7uWk4g8/qYznmqxPMELjkSayowfFMtWfq22UaxagvZtsFnNxn+9KnL
mel7AJFfU1mgPHtfde5CtOjnTEc1QPO7W9xNTmGe3okyEZF+7/gItzhoco4BM8pK
+wfaSQKBgQCP4IjEM46LpkmwD4STc5WJGb45D2pJwB3g7F2YoULTAcKqhFsztyP5
8fQRDXS21WyrOHjrM+/9nKLxieWUYXHbS6XpCg2tfRXgVLZS126jveUYvGqoOiCB
zx1Jq1AeM4+TceNXO9TRHHa5OC9iP08Wi451ZacHvZerJTDqwZf8DQ==
-----END RSA PRIVATE KEY-----`,
      },
    });
    await octokit.request('POST /repos/{owner}/{repo}/issues', {
      owner: 'headllines',
      repo: 'hackernews-daily',
      title: `Hacker News Daily Top 10 @${new Date().toISOString().slice(0, 10)}`,
      body: contents,
    })
  } catch (error) {
    console.error(error)
  }
}

