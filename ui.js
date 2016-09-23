/* js to deal with the ui and its changes */
/* Justin T Jones September 2016 */

pair = 1;
function addPair() {
  pair++;
  $('#form1').append("\n<label>Key:&nbsp;<input type=\"text\" id=\"k" + pair + "\"></label>&nbsp;<label>Value:&nbsp;<input type=\"text\" id=\"v" + pair + "\"></label><br>");
}
