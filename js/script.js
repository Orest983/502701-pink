ymaps.ready(function () {
  var myMap = new ymaps.Map('ya-map', {
      center: [59.936550, 30.32080],
      zoom: 16,
      controls: []
    },
    {
      suppressMapOpenBlock: true
    },
    {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(([59.936489, 30.32080]),{},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-marker.svg',
      iconImageSize: [36, 36],
      iconImageOffset: [0, 0]
    });
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('routeEditor');
});

// menu
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
