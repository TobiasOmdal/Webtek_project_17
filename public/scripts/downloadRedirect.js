document.querySelectorAll('.downloadBtn').forEach(btn => btn.onclick = () => {
    // OS detection from: http://stackoverflow.com/a/9039885/177710
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        window.open("https://play.google.com/store/apps/details?id=com.magson.SkiMentor");
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // TODO: add app store link when app launches
        window.open("https://itunes.apple.com/us/app/space-safari/id1215385382?l=nb&ls=1&mt=8");
    }
    else {
        window.open("index.html#badges");
    }
});
