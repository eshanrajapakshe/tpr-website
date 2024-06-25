class PRInput extends HTMLElement {
  static get observedAttributes() {
    return ["type", "placeholder", "elem-id", "elem-class", "value"];
  }

  constructor() {
    super();
    this._isPasswordVisible = false; 
  }

  connectedCallback() {
    this._updateInput();
  }

  _updateInput() {
    const placeholder = this.getAttribute("placeholder") || "";
    const id = this.getAttribute("elem-id") || "";
    const className = this.getAttribute("elem-class") || "";
    const value = this.getAttribute("value") || "";
    const type = this.getAttribute("type") || "text";

    this.innerHTML = `
      <div class="input-group">
        <input type="${type}" class="pr-input ${className}" id="${id}" value="${value}" required>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="input-label">${placeholder}</label>
        ${type === "password" ? '<button type="button" class="toggle-password"><img src="./assets/images/eye.svg" alt="Toggle Password"></button>' : ''}
      </div>
    `;

    const inputElement = this.querySelector("input");

    inputElement.addEventListener("input", () => {
      console.log(inputElement.value);
    });

    if (type === "password") {
      const toggleButton = this.querySelector(".toggle-password");
      toggleButton.addEventListener("click", () => this._togglePasswordVisibility(inputElement, toggleButton));
    }
  }

  _togglePasswordVisibility(inputElement, toggleButton) {
    this._isPasswordVisible = !this._isPasswordVisible;
    inputElement.type = this._isPasswordVisible ? "text" : "password";
    const iconPath = this._isPasswordVisible ? "./assets/images/eye-close.svg" : "./assets/images/eye.svg";
    toggleButton.querySelector("img").src = iconPath;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (["type", "placeholder", "value", "elem-id", "elem-class"].includes(name)) {
      this._updateInput();
    }
  }
}

customElements.define("pr-input", PRInput);
