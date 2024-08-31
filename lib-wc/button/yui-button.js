import styles from "./yui-button.css" with { type: "css" };

class YuiButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  
  }

  connectedCallback() {
    this.$button = document.createElement("button");
    this.shadowRoot.adoptedStyleSheets.push(styles);

    this.$button.classList.add("button");
    this.variant = this.getAttribute("variant") || "contained";
    this.color = this.getAttribute("color") || "primary";
    this.size = this.getAttribute("size") || "medium";
    this.loading = this.getAttribute("loading") || false;
    this.disabled = this.getAttribute("disabled") || false;
    this.type = this.getAttribute("type") || "button";



    this.$button.classList.add(this.color);
    this.$button.classList.add(this.variant);
    this.$button.classList.add(this.size);

    this.$button.setAttribute("type", this.type);

    if (this.loading) {
      this.$button.classList.add("loading");
    }
    
    if (this.disabled) {
      this.$button.disabled = true;
    }

    this.shadowRoot.appendChild(this.$button);

    this.$button.innerHTML = this.innerHTML;
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (newValue !== oldValue) {
      this[attrName] = newValue;
    }
  }
}

customElements.define("yui-button", YuiButton);
