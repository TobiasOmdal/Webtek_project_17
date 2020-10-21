document.querySelectorAll('.downloadBtn').forEach(btn => btn.onclick = () => {
    // OS detection from: http://stackoverflow.com/a/9039885/177710
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        window.open("https://play.google.com/store/apps/details?id=com.Magson.SpaceRide");
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.open("https://itunes.apple.com/us/app/space-safari/id1215385382?l=nb&ls=1&mt=8");
    }
    else {
        window.open("https://nrk.no");
    }
});

/* Kursside  */

function visMer(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var  cardTextEl = document.querySelector(".kurs p");
  var dots = cardTextEl.querySelector(".dots");
  var merTekst = cardTextEl.querySelector(".more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    target.innerHTML = "Se mer om kurset";
    merTekst.style.display = "none";
  } else {
    dots.style.display = "none";
    target.innerHTML = "Vis mindre";
    merTekst.style.display = "inline";
  }
};
