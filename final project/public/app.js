var popup = document.getElementById("popup");
var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var close = document.getElementById("close");
// function popup(){
//     popup.style.opacity = "1";
// }

// function popClose(){
//   popup.style.opacity = "0";
// }

// function hamShow(){
//   menu.style.display = "block";
// }

// function hamHide(){
//   menu.style.display = "none";
// }





$("#close").click(function(){
  $(".nav-menu").hide();
});

$("#hamburger").click(function(){
  $("nav-menu").show();
});