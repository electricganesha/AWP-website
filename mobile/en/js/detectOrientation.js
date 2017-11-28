


// Listen for orientation changes
window.addEventListener("orientationchange", function() {
	// Announce the new orientation number
  if (window.matchMedia("(orientation: portrait)").matches) {
     window.open("landscape.html","_self")
  }

  if (window.matchMedia("(orientation: landscape)").matches) {
     window.open("index.html","_self")
  }
}, false);
