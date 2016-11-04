function addArt() {
  var count = document.getElementsByClassName("uiStreamSponsoredLink").length;
  console.log(count);

  for (i = 0; i < count; i++) {
    var x = document.getElementsByClassName("uiStreamSponsoredLink")[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    x.className += " art";
  }
}

addArt();
window.onload = function () {
  window.onscroll = function () {
    if (document.body.scrollTop > 30) {
      addArt();
    }
  };
};
