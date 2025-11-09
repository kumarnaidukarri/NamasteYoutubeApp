// VideoCard component

const VideoCard = (props) => {
  const { info } = props;
  // console.dir(info);

  const { id, snippet, contentDetails, statistics } = info;
  const { title, channelTitle, thumbnails, channelId } = snippet;

  return (
    <div className="video-card  m-2 p-2 w-72 shadow-lg">
      <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold py-2"> {title} </li>
        <li> {channelTitle} </li>
        <li> {statistics.viewCount} views </li>
      </ul>
    </div>
  );
};

export default VideoCard;

// Example info data
/*
let info = {
  kind: "youtube#video",
  etag: "g3jxeXVkQwu-_gJd-yyj2xO6nUg",
  id: "Ge9TNAQQbRo",
  snippet: {
    publishedAt: "2025-11-08T12:37:15Z",
    channelId: "UCJxtNdTGIIaHEljCDo27b_w",
    title: "4 Non Blondes - What's Up? (Lyrics)",
    description:
      '🎤 4 Non Blondes - What\'s Up? (Lyrics) \n\nStream/Download: https://4NonBlondes.lnk.to/Essentials\n\nFollow 4 Non Blondes:\n▶ https://open.spotify.com/artist/0Je74SitssvJg1w4Ra2EK7\n▶ https://facebook.com/4nonblondes\n▶ https://www.instagram.com/4nonblondes/\n\nContact.Submit your track: \n▶ hello.fireplay@gmail.com\n\n........\n🎤  Lyrics "4 Non Blondes - What\'s Up?"\n\n[Verse 1]\n25 years and my life is still\nTryin\' to get up that great big hill of hope\nFor a destination\nI realized quickly when I knew I should\nThat the world was made up of this brotherhood of man\nFor whatever that means\n\n[Pre-Chorus]\nAnd so I cry sometimes when I\'m lying in bed\nJust to get it all out what\'s in my head\nAnd I, I am feeling a little peculiar\nAnd so I wake in the morning and I step outside\nAnd I take a deep breath and I get real high\nAnd I scream from the top of my lungs\n"What\'s going on?"\n\n[Chorus]\nAnd I say, hey-ey-ey\nHey-ey-ey\nI said "Hey, a-what\'s going on?"\nAnd I say, hey-ey-ey\nHey-ey-ey\nI said "Hey, a-what\'s going on?"\n\n[Bridge]\nOoh, ooh\nOoh\nOoh, uh huh\nOoh, ooh\nOoh\nOoh, uh huh\n\n[Verse 2]\nAnd I try\nOh my God, do I try\nI try all the time\nIn this institution\nAnd I pray\nOh my God, do I pray\nI pray every single day\nFor revolution\n\n[Pre-Chorus]\nAnd so I cry sometimes when I\'m lying in bed\nJust to get it all out, what\'s in my head\nAnd I, I am feeling a little peculiar\nAnd so I wake in the morning and I step outside\nAnd I take a deep breath and I get real high\nAnd I scream from the top of my lungs\n"What\'s going on?"\n\n[Chorus]\nAnd I say, hey-ey-ey\nHey-ey-ey\nI said "Hey, what\'s going on?"\nAnd I say, hey-ey-ey\nHey-ey-ey\nI said "Hey, a-what\'s going on?"\nAnd I say, hey-ey-ey\n(Wake in the morning and step outside)\nHey-ey-ey\n(Take a deep breath and I get real high)\n(And I scream)\nI said "Hey, a-what\'s going on?"\nAnd I say, hey-ey-ey\n(Wake in the morning and step outside)\nHey-ey, yeah yeah yeah\n(Take a deep breath and I get real high)\n(And I scream)\nI said "Hey, a-what\'s going on?"\n\n[Bridge]\nOoh, ooh\nOoh\nOoh, uh huh\n\n[Outro]\n25 years and my life is still\nTryin\' to get up that great big hill of hope\nFor a destination, mmm\n\n🔥 Make sure to subscribe and turn notifications on to keep up-to-date with the music we share!\n\n#4NonBlondes #WhatsUp #Lyrics #WhatsUpLyrics #FirePlay #Pop #PopMusic #LyricVideo #Hit',
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/Ge9TNAQQbRo/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/Ge9TNAQQbRo/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/Ge9TNAQQbRo/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      standard: {
        url: "https://i.ytimg.com/vi/Ge9TNAQQbRo/sddefault.jpg",
        width: 640,
        height: 480,
      },
      maxres: {
        url: "https://i.ytimg.com/vi/Ge9TNAQQbRo/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
    },
    channelTitle: "FirePlay",
    tags: [
      "4 Non Blondes What's Up",
      "4 Non Blondes What's Up Lyrics",
      "What's Up 4 Non Blondes",
      "What's Up 4 Non Blondes Lyrics",
      "4 Non Blondes",
      "What's Up",
      "What's Up Lyrics",
      "4 Non Blondes - What's Up",
      "What's Up - 4 Non Blondes",
      "what's up lyrics",
      "what's up",
      "what's up 4 non blondes",
      "4 non blondes what's up",
      "4 non blondes",
      "What's going on?",
      "I said hey what's going on",
      "And I say hey-ey-ey",
      "So I wake in the morning and step outside",
      "lyrics",
      "Lyrics",
      "And so I cry sometimes when I'm lying in bed",
      "Pop",
    ],
    categoryId: "10",
    liveBroadcastContent: "none",
    defaultLanguage: "en",
    localized: {
      title: "4 Non Blondes - What's Up? (Lyrics)",
      description:
        '🎤 4 Non Blondes - What\'s Up? (Lyrics) \n\nStream/Download: https://4NonBlondes.lnk.to/Essentials\n\nFollow 4 Non Blondes:\n▶ https://open.spotify.com/artist/0Je74SitssvJg1w4Ra2EK7\n▶ https://facebook.com/4nonblondes\n▶ https://www.instagram.com/4nonblondes/\n\nContact.Submit your track: \n▶ hello.fireplay@gmail.com\n\n........\n🎤  Lyrics "4 Non Blondes - What\'s Up?"\n\n[Verse 1]\n25 years and my life is still\nTryin\' to get up that great big hill of hope\nFor a destination\nI realized quickly when I knew I should\nThat the world was made up of this brotherhood of man\nFor whatever that means\n\n[Pre-Chorus]\nAnd so I cry sometimes when I\'m lying in bed\nJust to get it all out what\'s in my head\nAnd I, I am feeling a little peculiar\nAnd so I wake in the morning and I step outside\nAnd I take a deep breath and I get real high\nAnd I scream from the top of my lungs\n"What\'s going on?"\n\n[Chorus]\nAnd I say, hey-ey-ey\nHey-ey-ey\nI said "Hey, a-what\'s going on?"\nAnd I say, hey-ey-ey\nHey-ey-ey\nI said "Hey, a-what\'s going on?"\n\n[Bridge]\nOoh, ooh\nOoh\nOoh, uh huh\nOoh, ooh\nOoh\nOoh, uh huh\n\n[Verse 2]\nAnd I try\nOh my God, do I try\nI try all the time\nIn this institution\nAnd I pray\nOh my God, do I pray\nI pray every single day\nFor revolution\n\n[Pre-Chorus]\nAnd so I cry sometimes when I\'m lying in bed\nJust to get it all out, what\'s in my head\nAnd I, I am feeling a little peculiar\nAnd so I wake in the morning and I step outside\nAnd I take a deep breath and I get real high\nAnd I scream from the top of my lungs\n"What\'s going on?"\n\n[Chorus]\nAnd I say, hey-ey-ey\nHey-ey-ey\nI said "Hey, what\'s going on?"\nAnd I say, hey-ey-ey\nHey-ey-ey\nI said "Hey, a-what\'s going on?"\nAnd I say, hey-ey-ey\n(Wake in the morning and step outside)\nHey-ey-ey\n(Take a deep breath and I get real high)\n(And I scream)\nI said "Hey, a-what\'s going on?"\nAnd I say, hey-ey-ey\n(Wake in the morning and step outside)\nHey-ey, yeah yeah yeah\n(Take a deep breath and I get real high)\n(And I scream)\nI said "Hey, a-what\'s going on?"\n\n[Bridge]\nOoh, ooh\nOoh\nOoh, uh huh\n\n[Outro]\n25 years and my life is still\nTryin\' to get up that great big hill of hope\nFor a destination, mmm\n\n🔥 Make sure to subscribe and turn notifications on to keep up-to-date with the music we share!\n\n#4NonBlondes #WhatsUp #Lyrics #WhatsUpLyrics #FirePlay #Pop #PopMusic #LyricVideo #Hit',
    },
    defaultAudioLanguage: "en",
  },
  contentDetails: {
    duration: "PT4M14S",
    dimension: "2d",
    definition: "hd",
    caption: "true",
    licensedContent: true,
    contentRating: {},
    projection: "rectangular",
  },
  statistics: {
    viewCount: "1493514",
    likeCount: "3223",
    favoriteCount: "0",
    commentCount: "40",
  },
};
*/
