browser.webRequest.onBeforeRequest.addListener(
  function(details) {

// twitter -> nitter
    if (details.url.includes("x.com")) {
      return { redirectUrl: details.url.replace("x.com", "xcancel.com") };
    } 
    if (details.url.includes("twitter.com")) {
      return { redirectUrl: details.url.replace("twitter.com", "xcancel.com") };
    } 

  },
  {
    urls: ["*://x.com/*", "*://twitter.com/*"], 
    types: ["main_frame"]
  },
  ["blocking"]
);
