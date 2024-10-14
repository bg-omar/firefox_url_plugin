// popup.js
document.getElementById("btn").addEventListener("click", async function() {
    // Safely trigger an action and handle errors
    try {
        console.log("Button clicked in popup!");
        const response = await browser.runtime.sendMessage({ action: "popupClicked" });
        console.log("Received response:", response);

        let ogUrl = "";
        browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            let currentTab = tabs[0]; // Get the active tab
            ogUrl = currentTab.url;
            console.log("Current tab URL:", currentTab.url);
            let ppUrl = ogUrl.replace("youtube.com", "youtubepp.com");
            console.log("Big PP tab URL:", ppUrl);
            browser.runtime.sendMessage({ action: "openTab", url: ppUrl });
        });


    } catch (error) {
        console.error("Error occurred in popup: ", error);
    }
});
