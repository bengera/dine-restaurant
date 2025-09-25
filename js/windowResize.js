const timeDesMobile = document.getElementById("description-mobile");
const timeDesTablet = document.getElementById("description-tablet");
const datesDesMobile = document.querySelector(".dates__description");
const datesDesTablet = document.querySelector(".dates__description.mobile");

(function () {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;
    // console.log(myWidth);
    // your size calculation code here
    // REFACTOR WITH CLASS ADD/REMOVE
    if (myWidth >= 480) {
      timeDesMobile.style.display = "none";
      timeDesTablet.style.display = "block";
      datesDesMobile.style.display = "none";
      datesDesTablet.style.display = "block";
    } else {
      timeDesMobile.style.display = "block";
      timeDesTablet.style.display = "none";
      datesDesMobile.style.display = "block";
      datesDesTablet.style.display = "none";
    }
  }
})();
