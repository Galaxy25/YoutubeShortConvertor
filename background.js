chrome.webNavigation.onHistoryStateUpdated.addListener( (tab) => { 
    if (tab.frameId == 0)
    {
        if (tab.url.startsWith("https://www.youtube.com/shorts/"))
        {
            chrome.tabs.update(tab.id, {url: "https://www.youtube.com/watch?v=" + tab.url.substr(31)});
            chrome.browsingData.remove({"since": tab.timeStamp-1000}, {"history": true});
            //chrome.history.deleteUrl({url: tab.url});
            //chrome.history.deleteRange({startTime: tab.timeStamp-10000, endTime: tab.timeStamp+10000});
        }
    }
});

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  