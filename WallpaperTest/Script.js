"use strict";
function ChangeText() {
    var Toptext = "Is the image rotating?";
    var Bottomtext = "Hopefully.";
    document.getElementById('toptext').innerHTML = Toptext;
    document.getElementById('bottomtext').innerHTML = Bottomtext;
    document.getElementById('button').style.display = "none";
}
$(document).ready(function () {
    $("#button").click(function () {
        $("#mushroomdrawing").toggleClass("rotate");
    });
});