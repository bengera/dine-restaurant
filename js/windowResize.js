const timeDesMobile = document.getElementById("description-mobile");
const timeDesTablet = document.getElementById("description-tablet");

(function () {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;
    // console.log(myWidth);
    // your size calculation code here
    if (myWidth >= 480) {
      timeDesMobile.style.display = "none";
      timeDesTablet.style.display = "block";
    } else {
      timeDesMobile.style.display = "block";
      timeDesTablet.style.display = "none";
    }
  }
})();
