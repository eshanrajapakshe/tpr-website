class PRTypography extends HTMLElement {
  static get observedAttributes() {
    return ["text", "type", "elem-id", "elem-class"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this._updateTypography();
  }

  _updateTypography() {
    const text = this.getAttribute("text") || "";
    const type = this.getAttribute("type") || "h1";
    const id = this.getAttribute("elem-id") || "";
    const className = this.getAttribute("elem-class") || "";

    this.innerHTML = `<${type} id="${id}" class="typography ${className}">${text}`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (["text", "type", "elem-id", "elem-class"].includes(name)) {
      this._updateTypography();
    }
  }
}

customElements.define("pr-typography", PRTypography);
