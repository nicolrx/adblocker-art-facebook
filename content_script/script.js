var img = ["http://sachagoldberger.com/portfolio/wp-content/gallery/flemish-in-the-stars/21_07_13_Super-H%C3%A9ros-Flamands-_21_darkvador_1293_05.jpg",
"http://static1.gamerstuff.fr/wp-content/uploads/2014/11/sacha-goldberger-super-heros-flamands-cat-woman.jpg",
"http://actuphoto.com/files/news_34875_0.jpg",
"http://sachagoldberger.com/portfolio/wp-content/gallery/flemish-in-the-stars/29_Convention_STMAXIME_TUSKEN_RIDER30358_03.jpg",
"http://sachagoldberger.com/portfolio/wp-content/gallery/super-flemish/SuperHerosFlamands_CatwomanFace_009.jpg",
"http://sachagoldberger.com/portfolio/wp-content/gallery/flemish-in-the-stars/23_Convention_STCHEWBACCA_VINCENT30302_12.jpg",
"http://www.lesinrocks.com/content/uploads/2014/11/15_07_13_super-hros-flamands-_16_spiderman_0827_08.jpg",
"http://static1.gamerstuff.fr/wp-content/uploads/2014/11/sacha-goldberger-super-heros-flamands-blanche-neige.jpg",
"https://wegeekgirls.files.wordpress.com/2014/11/super-flamands-series-by-sacha-goldberger-13.jpg",
"http://static1.gamerstuff.fr/wp-content/uploads/2014/11/sacha-goldberger-super-heros-flamands-wonderwoman.jpg",
"http://static1.gamerstuff.fr/wp-content/uploads/2014/11/sacha-goldberger-super-heros-flamands-alice.jpg",
"http://www.lense.fr/wp-content/uploads/2014/11/15_07_13_Super-H%C3%A9ros-Flamands-_03_Captain_America_0130_06.jpg",
"http://sachagoldberger.com/portfolio/wp-content/gallery/flemish-in-the-stars/26_Convention_STPERRINE_BOUSHH30277_04.jpg",
"http://www.laboiteverte.fr/wp-content/uploads/2014/11/superherosflammand-05.jpg",
"http://sachagoldberger.com/portfolio/wp-content/gallery/family-portrait/15_07_13_Super-H%C3%A9ros-Flamands-_doublons_1114-copie.jpg",
"https://finnmag.files.wordpress.com/2015/04/15_07_13_super-hc3a9ros-flamands-_10_joker_007.jpg",
"http://i0.wp.com/jeuxdemots.sciencesjeux.com/wp-content/uploads/2016/01/sacha-goldberger-super-heros-16-siecle-23.jpg",
"http://sachagoldberger.com/portfolio/wp-content/gallery/super-flemish/19_15_07_13_Super-H%C3%A9ros-Flamands-_04_Wolverine_0194_04.jpg",
"http://sachagoldberger.com/portfolio/wp-content/gallery/super-flemish/15_07_13_Super-H%C3%A9ros-Flamands-_14_Wonderwoman_0709_5.jpg",
"http://www.wipplay.com//anonymiser/312087-newvis.jpg",
"http://1.bp.blogspot.com/-OOBF7rXRooU/VHI8FMvTBnI/AAAAAAAAAbc/_X1hqNp1cCE/s1600/SuperHerosFlamands_Leia_Sacha.jpg"];

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
          window.open('http://sachagoldberger.com/portfolio/?ref=feedart.co','_blank');
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
          window.open('http://sachagoldberger.com/portfolio/?ref=feedart.co','_blank');
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
