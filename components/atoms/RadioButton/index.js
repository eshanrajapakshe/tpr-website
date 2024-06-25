class PRRadioButton extends HTMLElement {
  static get observedAttributes() {
    return ["elem-id", "elem-class", "value"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this._updateRadioButton();
  }

  _updateRadioButton() {
    const id = this.getAttribute("elem-id") || "";
    const className = this.getAttribute("elem-class") || "";
    const value = this.getAttribute("value") || "";
    const name = this.getAttribute("name") || "";

    this.innerHTML = `<div class="radio ${className}">
    <input id="${id}" type="radio" name="${name}" class="pr-radio" ${
      value ? "checked" : ""
    } >
    <label for="${id}" class="radio-label"></label>
  </div>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (["value", "elem-id", "elem-class", "name", "onclick"].includes(name)) {
      this._updateRadioButton();
    }
  }

  checkRadioButton() {
    const inputElement = this.querySelector('input[type="radio"]');
    if (inputElement) {
      inputElement.checked = true;
      inputElement.dispatchEvent(new Event("change"));
    }
  }
}

customElements.define("pr-radio-button", PRRadioButton);
