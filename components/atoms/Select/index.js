class PRSelect extends HTMLElement {
  static get observedAttributes() {
    return [
      "type",
      "placeholder",
      "elem-id",
      "elem-class",
      "value",
      "options",
      "label",
    ];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this._updateSelect();
  }

  _updateSelect() {
    const id = this.getAttribute("elem-id") || "";
    const className = this.getAttribute("elem-class") || "";
    const value = this.getAttribute("value") || "";
    const label = this.getAttribute("label") || "";
    const options = JSON.parse(this.getAttribute("options") || "[]");

    this.innerHTML = `<div class="select-input-group">      
        <label for="${id}">${label}</label>
        <div class="select-wrapper">
          <select name="${id}" id="${id}" class="pr-select ${className}">
            ${options
              .map(
                (option) =>
                  `<option value="${option.value}" ${
                    option.value === value ? "selected" : ""
                  }>${option.text}</option>`
              )
              .join("")}
          </select>
          <img src="../../../assets/images/dropdown-arrow.svg" class="custom-dropdown-icon" />
        </div>
      </div>`;

    const inputElement = this.querySelector(`#${id}`);

    inputElement.addEventListener("change", () => {
      console.log(inputElement.value);
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (
      [
        "type",
        "placeholder",
        "value",
        "elem-id",
        "elem-class",
        "options",
        "label",
      ].includes(name)
    ) {
      this._updateSelect();
    }
  }
}

customElements.define("pr-select", PRSelect);
