var toggle = document.querySelector(".toggle");
var navContainer = document.querySelector(".nav-container");

toggle.addEventListener("click", function(){
 navContainer.classList.toggle("show");
})