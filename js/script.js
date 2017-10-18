(function() {
  var pageHader = document.querySelector(".page-header");
  var toggle = document.querySelector(".main-nav__toggle");
  var siteList = document.querySelector(".site-list");

  siteList.classList.toggle("site-list--opened");
  siteList.classList.toggle("site-list--closed");

  toggle.addEventListener("click", function() {
    toggle.classList.toggle("main-nav__toggle--closed")
    pageHader.classList.toggle("page-header--nav-opened");
    siteList.classList.toggle("site-list--opened");
    siteList.classList.toggle("site-list--closed");
  });
})();
