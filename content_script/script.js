var img = ["http://cdn.shopify.com/s/files/1/0895/2844/products/lenin_grande.jpg?v=1434721597",
"http://cdn.shopify.com/s/files/1/0895/2844/products/mlk_grande.jpg?v=1434889207",
"http://cdn.shopify.com/s/files/1/0895/2844/products/Trump_-_HIPSTORY_-_Amit_Shimoni_grande.jpg?v=1459857088",
"http://cdn.shopify.com/s/files/1/0895/2844/products/obama_grande.jpg?v=1434877005",
"http://cdn.shopify.com/s/files/1/0895/2844/products/churchill_grande.jpg?v=1434716339",
"http://cdn.shopify.com/s/files/1/0895/2844/products/lama_grande.jpg?v=1434719155",
"http://cdn.shopify.com/s/files/1/0895/2844/products/mandella_grande.jpg?v=1434719438",
"http://cdn.shopify.com/s/files/1/0895/2844/products/reagan_grande.jpg?v=1434889117",
"http://cdn.shopify.com/s/files/1/0895/2844/products/Beatrix_grande.jpg?v=1438097636",
"http://cdn.shopify.com/s/files/1/0895/2844/products/gandhi_grande.jpg?v=1434397464",
"http://cdn.shopify.com/s/files/1/0895/2844/products/putin_grande.jpg?v=1468418630",
"http://cdn.shopify.com/s/files/1/0895/2844/products/de_gaulle_grande.jpg?v=1436789874",
"http://freeyork.org/wp-content/uploads/2015/01/hipstory10.jpg",
"http://cdn.shopify.com/s/files/1/0895/2844/products/che_grande.jpg?v=1434721315",
"http://www.mouv.fr/sites/default/files/2014/12/15/182544/mao__700.jpg",
"http://cdn.shopify.com/s/files/1/0895/2844/products/washington_grande.jpg?v=1434877070",
"http://cdn.shopify.com/s/files/1/0895/2844/products/lincoln_grande.jpg?v=1455202340",
"http://cdn.shopify.com/s/files/1/0895/2844/products/hillary_grande.jpg?v=1434721556",
"http://cdn.shopify.com/s/files/1/0895/2844/products/kennedy_grande.jpg?v=1434719011",
"http://cdn.shopify.com/s/files/1/0895/2844/products/abby_tlv2_grande.jpg?v=1449582934",
"http://cdn.shopify.com/s/files/1/0895/2844/products/hipstory_santa_grande.jpg?v=1448476196",
"http://cdn.shopify.com/s/files/1/0895/2844/products/golda_grande.jpg?v=1434902839",
"http://cdn.shopify.com/s/files/1/0895/2844/products/margaret_thatcher_grande.jpg?v=1434721473",
"http://cdn.shopify.com/s/files/1/0895/2844/products/queen_elizabeth_grande.jpg?v=1434719302",
"http://cdn.shopify.com/s/files/1/0895/2844/products/angela_merkel_grande.jpg?v=1455203097"];

var count_img = img.length;

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Feed Ad
function addArt() {
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

// call function
addArt();
window.onload = function () {
  window.onscroll = function () {
    if (document.body.scrollTop > 30) {
      addArt();
    }
  };
};
