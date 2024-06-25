class PRButton extends HTMLElement {
  static get observedAttributes() {
    return [
      "label",
      "elem-id",
      "elem-class",
      "onclick",
      "icon-url",
      "icon-position",
    ];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this._updateButton();
    this._addClickListener();
  }

  _updateButton() {
    const label = this.getAttribute("label") || "";
    const id = this.getAttribute("elem-id") || "";
    const className = this.getAttribute("elem-class") || "";
    const iconUrl = this.getAttribute("icon-url") || "";
    const iconPosition = this.getAttribute("icon-position") || "left";
    const disabled = this.getAttribute("disabled") || "";

    let iconHTML = "";
    if (iconUrl) {
      iconHTML = `<img src="${iconUrl}" class="btn-icon ${iconPosition}" alt="icon">`;
    }

    this.innerHTML = `
      <button id="${id}" class="btn ${className}" ${disabled ? "disabled" : ""}>
        ${iconPosition === "left" ? iconHTML : ""}
        <span class="btn-label">${label}</span>
        ${iconPosition === "right" ? iconHTML : ""}
      </button>`;
  }

  _addClickListener() {
    const id = this.getAttribute("elem-id");
    const className = this.getAttribute("elem-class");
    const onClickAttr = this.getAttribute("onclick");

    if (id) {
      const button = this.querySelector(`#${id}`);
      if (button) {
        if (onClickAttr) {
          const onClickFunction = new Function(onClickAttr);
          button.addEventListener("click", onClickFunction);
        }

        button.addEventListener("click", () => {
          if (className) {
            button.classList.toggle(`${className}-clicked`);
          }
        });
      }
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (
      [
        "label",
        "elem-id",
        "elem-class",
        "onclick",
        "icon-url",
        "icon-position",
      ].includes(name)
    ) {
      this._updateButton();
      this._addClickListener();
    }
  }
}

customElements.define("pr-button", PRButton);
