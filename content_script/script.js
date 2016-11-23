// Init XHR Object and retrieve list from a github repo
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/askz/adblocker-art-facebook/master/current-art.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    var resp = JSON.parse(xhr.responseText);
    console.log(resp);
    // call function
    addArt(resp);
    window.onload = function () {
      window.onscroll = function () {
        if (document.body.scrollTop > 30) {
          addArt(resp);
        }
      };
    };
  }
};
xhr.send();

// https://raw.githubusercontent.com/askz/adblocker-art-facebook/master/current-art.json


/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Feed Ad
function addArt(img) {
  var count_img = img.length;
  var count = document.getElementsByClassName("uiStreamSponsoredLink").length;
  for (i = 0; i < count; i++) {
    var x = document.getElementsByClassName("uiStreamSponsoredLink")[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      if (typeof x.style.content === "undefined" || !x.style.content) {
        var random_img = getRandomInt(0,count_img);
        // x.className += "art".i;
        x.style.content = "url("+img[random_img]+")";
        x.style.width = "100%";
        x.style.cursor = "pointer";
        x.onclick = function () {
          window.open('http://www.shimoni-illustration.com/?ref=www.addart.co','_blank');
        }
      }
    }

  // Right Hand Side Ad
  var count2 = document.getElementsByClassName("ego_section").length;
  for (a = 0; a < count2; a++) {
    var y = document.getElementsByClassName("ego_section")[a];
      if (typeof y.style.content === "undefined" || !y.style.content) {
        var random_img2 = getRandomInt(0,count_img);
        // x.className += "art".i;
        y.style.content = "url("+img[random_img2]+")";
        y.style.width = "100%";
        y.style.cursor = "pointer";
        y.onclick = function () {
          window.open('http://www.shimoni-illustration.com/?ref=www.addart.co','_blank');
        }
      }
    }
};

