# Hacker News Daily Top 10 posts

[![](https://badgen.net/badge/icon/Telegram?icon=telegram&label)](https://t.me/headllines) [![Follow on Feeds Pub](https://img.shields.io/badge/dynamic/json?label=follow&query=%24.data.feed.followerCount&url=https%3A%2F%2Fapi.feeds.pub%2Fgraphql%3Fquery%3Dquery%2520feed%28%2524id%253A%2520String%21%29%257B%2520feed%28id%253A%2520%2524id%29%2520%257B%2520followerCount%2520%257D%2520%257D%26variables%3D%257B%2522id%2522%253A%2520%2522http%3A%2F%2Frsshub.app%2Fgithub%2Fissue%2Fheadllines%2Fhackernews-daily%2522%257D%26operationName%3Dfeed&style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAACXBIWXMAAAInAAACJwG+ElQIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASkSURBVHgB7Ztdcts2EMf/oDyeNO5MnBOUN4hzAtNvrZ0H8QSimwPEPoHlE9g5gZkTSJ46mU77YPYEVd/6yN5AnWkzrVNxuxAhN3UA0YL46eA3Y30AkDT8c7FY7MKAw+FwlIfAAyAafe2rl/w8m8bhjxOsQedEiUbBNrAVeQLPCBTwJfiaYROiWRiH36ewYAMdIBfiUV+I3oDfBrKN5j3Ge7rDYy/4eQ8WtFoUOS08zxsQiSN+u73ap7EDS1opCosR8J0+4ZcBEWyZwpJWiRKN9tnsxRnUFFkHIjqFJa1wtNJneN7WCVvFEexgqyD+E1MBkWaUXcbhuxiWNC7Ky8sXrzKiIVbzGVO2hDeANwb+mMRhYj1VdDQmytw6xJcXvKz2V/hYwk73NA6vElRII6Io3zHCPNgqhK1CvGaLOC/bIkzU7mij0TccbwgZQxRNl9rFWFCrpby8PBhkhLhoHPsLFuP9sG4xFtQmioo9rguGcXgujqv2GUX0UAMyMmVBpA8xThllHYdx+MOvaJhafIqyEN/Qzb7DY+v4LkZLqFwUFYf4hm4Zb+yxIGtt9cumUp+ipo3RSliQ5xx5tkoQiYdK8QIYBcFxGwWRVCoKxyMnhi4Ozd+eo6VUJopKEfq6PqKbQ7SYCh3txs4iP3aHqRCbZ4fjA16eSS3RIp0/CkyyjH4BssQ2lVgGFYqS7Rj8uBQiyF/e9vvygf0MB3iyrYdvxwdxRrPTJsSpZPrkq47YxRqwjUW8cv0sN4+omdJFkXGJvBiUkD1jtlnc649KGLVQ2vTJ8yOPzzhQi1AuPN08mZGzzcqtTCmWIgURYuuaICJUAFvLADWydkS7EAT3LClwFPsT3wuOUbIU2OTUwI20BOl85WrEuRYM9J/782lnkkwq4XxvZ8h3/auL/tXY0D0+HO/v6qp+vc3HT7BG2WIV1po+vDJEFhl4P6/4mRDaC5/dfHiKmlhLlCVhvIw5ONtOqb73i0DXGo36UiyD1X1IURPWokgrgXn3+5r3NlHuPzQ/anCcPe8fk0NN60xNWouyxEr4At6pKSUS3QBepYK7U0jGIqr+oxmPBDViJYqKMn1dH+dYP9rsbUqHqrvD84rgf993m3fR+xoSb1AjVktyNDo44qXzTNM1uei/ff7/sfvnbFWvdN8jRG4ZBacKEv5OqyMVtlgtyewTdkmzAybKNHc045ikpxWFxRiiAKJZ7WkGq+lDt1v+u/Q+yaTJXW5e1LL4nXl2rjO7ZFMi+m/DCrEx5IcUq/zCvGbcTHbOUhTh61pNB/DicMxZ+5n0CynuQW4hV0M0xMqiqABLx9I4Ip9Gsz1ejsdLhiV5hr/Z/K2Fo/1r21BYLAyulH8Io9GLgB2wLLQ/ExzWZ5T9Js+aNF0uXdDI8S518Qlaio1P8Q3tKR4IFRfDuokTRYONKKmh3ccDwVmKBieKBieKBgtRHpmCtKLTjp1hZVHkPsbQ9fmK8jlgK4rWWpaXLrqDbT5FK4oqWHUeN300OFE0OFE02KYjU13r7Ob973gA2GXziY5xZwXKE83N/NdF2VifT8mPXHlHXAN6knEFry2pRIfD4XA4usm//qauBcoh1b8AAAAASUVORK5CYII=)](https://feeds.pub/feed/http%3A%2F%2Frsshub.app%2Fgithub%2Fissue%2Fheadllines%2Fhackernews-daily)

## How to subscribe

Top posts are stored in [issues](https://github.com/headllines/hackernews-daily/issues). You can subscribe via [RSS](https://feeds.pub/feed/http%3A%2F%2Frsshub.app%2Fgithub%2Fissue%2Fheadllines%2Fhackernews-daily), or by [watching this repo](#how-does-it-work). 

Email and other ways to subscirbe updates are still under development, you can join [the mailing list](https://headllines.com) to get notified.

## How does it work

1. A script fetches top posts on hackernews every day
2. It opens an issue on this repo and store the headlines
3. People can subscribe to new issue via [RSS](https://feeds.pub/feed/http%3A%2F%2Frsshub.app%2Fgithub%2Fissue%2Fheadllines%2Fhackernews-daily) or by watching this repo

<img src="https://timqian-imgs.s3.ap-southeast-1.amazonaws.com/2020-09-Screen%20Shot%202020-09-01%20at%205.15.54%20PM.png" alt="hackernews daily" width="400"/>

## Thanks

- [Algolia](https://hn.algolia.com/) for the hacker news API
- [RSSHub](https://github.com/diygod/rsshub) for generating RSS file from issues
- [Feeds.Pub](https://feeds.pub) for hosting the RSS feed
- [github-trending-repos](https://github.com/vitalets/github-trending-repos) for inspariation

## Related headline collectors

- [Hacker News Weekly](https://github.com/headllines/hackernews-weekly)
- [Hacker News Monthly](https://github.com/headllines/hackernews-monthly)

## Contribute

We at [headllines.com](https://headllines.com) build open source headline collectors, if you are interested in writing an headline collector and join this orgnization, feel free to join our [telegram group](https://t.me/headllines)

## Authors

- [timqian](https://github.com/timqian)
- [leadream](https://github.com/leadream)
