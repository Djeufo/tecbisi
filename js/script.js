// set sticky effect for header
/*
//TODO : check me
window.onscroll = function() { myStickyEffectFunction() };

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function myStickyEffectFunction() {

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

}
*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}
/*
$("button").click(function() {
    $("h1").css("color", "Yellow");
});
*/