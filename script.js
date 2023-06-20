//your JS code here. If required.
 window.onload = function() {
            var browserInfo = document.getElementById("browser-info");
            
            var browserName = navigator.userAgent;
            var version = parseFloat(navigator.appVersion);
            
            browserInfo.textContent = "You are using " + browserName + " version " + version;
        };