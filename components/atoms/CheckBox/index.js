class PRCheckBox extends HTMLElement {
  static get observedAttributes() {
    return ["elem-id", "elem-class", "value"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this._updateCheckBox();
  }

  _updateCheckBox() {
    const id = this.getAttribute("elem-id") || "";
    const className = this.getAttribute("elem-class") || "";
    const value = this.getAttribute("value") || "";
    const label = this.getAttribute("label") || "";

    this.innerHTML = `<input class="pr-checkbox ${className}" id="styled-checkbox" type="checkbox">
    <label for="styled-checkbox">${label}</label>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (["value", "elem-id", "elem-class"].includes(name)) {
      this._updateCheckBox();
    }
  }
}

customElements.define("pr-checkbox", PRCheckBox);
