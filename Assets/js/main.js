const btn_menu = document.querySelector(".menu-login");
const div_logut = document.querySelector(".menu-logout");

btn_menu.addEventListener("click", function(){
    div_logut.classList.toggle('inactive');
});