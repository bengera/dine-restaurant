class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
        <div class="footer__content">
          <div class="footer__left-content">
          <img src="logo.svg" alt="dine logo" class="footer__logo">
        </div>
        <div class="footer__right-content">
          <div class="footer__contact-info fw-regular">
            <address class="footer__contact-info uppercase">
              Marthwaite, Sedbergh <br>
              Cumbria <br>
              +00 44 123 4567
            </address>
          </div> <!--contact info end-->
          <div class="footer__opening-times fw-regular">
            OPEN TIMES<br>
            MON - FRI: 09:00 AM - 10:00 PM<br>
            SAT - SUN: 09:00 AM - 11:30 PM
          </div>
        </div>
        </div> <!--footer content end-->
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
