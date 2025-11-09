// Free Youtube API
/*
* Login into Google Cloud Console and create a Project.
1. Search for "Youtube Video API" in google chrome, Go to videos -> list -> http -> copy 'URL'
YOUTUBE_VIDEOS_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]";
2. Search, Get for "Youtube API Key Auth" in google chrome, Go to credentials -> create crediantial -> copy 'API key'
3. Api URL + Api Key
*/

// Never Push Share this Key to Anyone. use .env
const YOUTUBE_API_KEY = "AIzaSyBDG532u_1wbeNVh1d81e0bJfE99QOFxDw";

const YOUTUBE_VIDEOS_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  YOUTUBE_API_KEY;

export { YOUTUBE_VIDEOS_API_URL };

// read more: https://developers.google.com/youtube/v3/docs/videos/list
/*
look for query parameters and add to your Youtube API URL to get customized results.
Query parameters:
    maxResults = 1 - 50
    myRating = 'like' 'dislike'
    regionCode = 'IN' 'US'
*/
