function buildStr() {
  i = 1;
  dStr = "";
  while (i < pair) {
    dStr += $('#k' + i).val() + "=" + $('#v' + i).val() + "&";
      i++;
  }
  dStr += $('#k' + i).val() + "=" + $('#v' + i).val();
  console.log("dStr: " + dStr);
  $('#responseDiv').html(dStr);
  sendData(dStr);
}
function sendData(dStr) {
  $.ajax({
    url: $('#url').val(),
    type: "POST",
    data: dStr,
    success: function testS(resp){$('#responseDiv').html(resp);},
    error: function testE(resp){$('#responseDiv').html('There was an error<br>\n<br>\n' + resp);},
  });
}
