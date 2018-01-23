'use strict';
const mockData = {
  'kind': 'youtube#searchListResponse',
  'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/a5cGKSnne1XohgnKWBYksVFeoLg"',
  'nextPageToken': 'CAUQAA',
  'regionCode': 'US',
  'pageInfo': {
    'totalResults': 1000000,
    'resultsPerPage': 5
  },
  'items': [
    {
      'kind': 'youtube#searchResult',
      'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/p0QQhOOFnwApXXMFrddYjFYAko4"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'P3CBTDH8aFQ'
      },
      'snippet': {
        'publishedAt': '2016-11-17T18:36:22.000Z',
        'channelId': 'UCro3nhqOYcWqzgDUN6cY24w',
        'title': 'In The Name Of Love -Miraculous Ladybug- [AMV]',
        'description': 'Adrien and Marinette together forever *u* Song: Martin Garrix & Bebe Rexha - In The Name Of Love Program: Sony Vegas Pro 13 ~Kisses Zara~',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/P3CBTDH8aFQ/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/P3CBTDH8aFQ/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/P3CBTDH8aFQ/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Zara [MLB]',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/PVZe6LxqZzTL1er-0_3zrI-zXmk"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'xr_5y4NdNcs'
      },
      'snippet': {
        'publishedAt': '2016-10-11T17:15:45.000Z',
        'channelId': 'UCW4TJbg3C2mIgM8o9ArgWNg',
        'title': 'Miraculous Ladybug [AMV] - In The Name Of Love',
        'description': 'Would you call in the name of love? ------- I really like this song :D Montage: ladiesofmiracle Song: Martin Garrix ft Bebe Rexha - Name of Love.',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/xr_5y4NdNcs/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/xr_5y4NdNcs/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/xr_5y4NdNcs/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': '「LadiesOfMiracle」',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/o-mKm2tkqpirzmysqzrtHhI2jaA"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'hAe-VBPRCuY'
      },
      'snippet': {
        'publishedAt': '2015-09-07T14:04:25.000Z',
        'channelId': 'UCoObZ8ck-okJM6geQ9XTiNQ',
        'title': 'Let The Cat In - Name A Game',
        'description': 'Hey there, welcome to Name A Game! In this series Nathaniel and Chase pick games for each other to play. The person playing doesn\'t know the game until they sit down. Should be a lot of random...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/hAe-VBPRCuY/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/hAe-VBPRCuY/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/hAe-VBPRCuY/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'The Double Experience',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/F8wva1_P0DSVSwzY_DKFhGMxZtw"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'xU76n2C6SwM'
      },
      'snippet': {
        'publishedAt': '2016-02-16T20:57:57.000Z',
        'channelId': 'UCxLpKibphYqXrXpxAnR8MfA',
        'title': 'Dolph-In The Name Of Love (Like, Share, Die)',
        'description': 'One woman, one dolphin, one hand – don\'t judge their love.',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/xU76n2C6SwM/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/xU76n2C6SwM/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/xU76n2C6SwM/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'MondoMedia',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/wGn4J7m_rc7EdMnobVGMcY1AUXY"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'ezcvTHex30s'
      },
      'snippet': {
        'publishedAt': '2017-10-06T04:38:28.000Z',
        'channelId': 'UCHyD9wxkmIH5hUEjmDX4vvA',
        'title': 'Blaze The Cat In The Name Of Love',
        'description': '',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/ezcvTHex30s/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/ezcvTHex30s/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/ezcvTHex30s/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Blaze The Cat 792',
        'liveBroadcastContent': 'none'
      }
    }
  ]
};
 
const API_KEY = 'AIzaSyBY1e-VnTJfOSzq55-qGgq526sD6BHh408';

const store = {
  videos: []
};

// TASK: Add the Youtube Search Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  const query = {
    q: `${searchTerm} in:name`,
    part: 'snippet',
    key: API_KEY
  };
  $.getJSON(BASE_URL, query, callback);
};
fetchVideos('cat', (response)=> console.log(response));

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {

};

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {

};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function(videos) {

};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {

};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {

};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
