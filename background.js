chrome.tabs.onUpdated.addListener(async (tab) => { 
    let currentTab = await getCurrentTab();
    console.log(currentTab.url);
    if (currentTab.url.startsWith("https://www.youtube.com/shorts/"))
    {
        chrome.tabs.update(tab.id, {url: "https://www.youtube.com/watch?v=" + currentTab.url.substr(31)});
    }
});

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }