/* Working on a script to parse image data on a page */
/* Justin T Jones 20160915 */

var imgs = document.getElementsByTagName("img");
for (var i = 0; i < imgs.length; i++) {
  var alt = imgs[i].getAttribute("alt");
  var src = imgs[i].getAttribute("src");
}