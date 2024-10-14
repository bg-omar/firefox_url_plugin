console.log("Background script is running");

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "popupClicked") {
        console.log("Popup button was clicked!");
        sendResponse({ status: "Success" });
    }
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openTab" && message.url) {
        // Open a new tab with the received URL
        browser.tabs.create({ url: message.url });
        sendResponse({ status: "Tab opened successfully" });
    }
});
