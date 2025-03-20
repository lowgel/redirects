browser.webRequest.onBeforeRequest.addListener(
  function(details) {

// twitter -> nitter
    if (details.url.includes("x.com")) {
      return { redirectUrl: details.url.replace("x.com", "xcancel.com") };
    }

// reddit -> old reddit
    if (details.url.includes("www.reddit.com")) {
      return { redirectUrl: details.url.replace("www.reddit.com", "old.reddit.com") };
    } else if (details.url.includes("reddit.com")) {
      return { redirectUrl: details.url.replace("reddit.com", "old.reddit.com") };
    }

  },
  {
    urls: ["*://x.com/*", "*://reddit.com/*", "*://www.reddit.com/*"], 
    types: ["main_frame"]
  },
  ["blocking"]
);
