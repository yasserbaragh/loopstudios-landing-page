const myMenu = document.getElementById("menu"),
      myIcon = document.querySelector(".fa-bars"),
      myNav = document.querySelector(".nav-mobile");

myMenu.addEventListener("click", function () {
    if(myNav.classList.contains("nav-mobile")) {
    myIcon.classList.remove("fa-bars");
    myIcon.classList.add("fa-times");
    myNav.classList.remove("nav-mobile");
    myNav.classList.add("nav-mobile-vs");
    } else {
        myIcon.classList.remove("fa-times");
        myIcon.classList.add("fa-bars");
        myNav.classList.remove("nav-mobile-vs");
        myNav.classList.add("nav-mobile");
    }
})