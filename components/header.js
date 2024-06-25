class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="container">
      <div class="logo-wrapper">
        <img src="./assets/images/logo.png" alt="">           
      </div>
      <div class="link-list-wrapper">
        <ul>
          <li><a href="#">Grades K-12</a></li>
          <li><a href="#">Graduate</a></li>
          <li><a href="#">Professional</a></li>
        </ul>
        <span class="divider"></span>
        <ul>
          <li><a href="#">Partnerships</a></li>
          <li><a href="#">Explore Schools</a></li>
        </ul>
      </div>
      <div class="icon-list-wrapper">
        <button class="btn">
          <img src="./assets/images/search.svg" alt="">
        </button>
        <button class="btn">
          <img src="./assets/images/shopping_cart.svg" alt="">
        </button>
        <button class="btn">
          <img src="./assets/images/call.svg" alt="">
        </button>
        <button class="btn profile">
          <img src="./assets/images/person.svg" alt="">
        </button>
      </div>
    </header>
      `;
  }
}

customElements.define("header-component", Header);
