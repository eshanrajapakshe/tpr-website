class PRBadge extends HTMLElement {
  static get observedAttributes() {
    return ["elem-class", "text", "type"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this._updateBadge();
  }

  _updateBadge() {
    const className = this.getAttribute("elem-class") || "";
    const text = this.getAttribute("text") || "";
    const type = this.getAttribute("type") || "primary";

    this.innerHTML = `<span class="badge badge-${type} ${className}">${text}</span>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (["elem-class", "text", "type"].includes(name)) {
      this._updateBadge();
    }
  }
}

customElements.define("pr-badge", PRBadge);
