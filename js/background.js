chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('../main.html', {
    id: "13 Virtues",
    bounds: {
      width: 500,
      height: 600
    },
    minWidth: 500,
    frame: 'none'
  });
});
