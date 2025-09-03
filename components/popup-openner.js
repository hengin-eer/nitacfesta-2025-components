class PopupOpenner extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
      <style>
        button {
          all: unset;
					display: block;
					width: 100%;
          cursor: pointer;
        }
        button:focus {
          outline: 2px solid #1976d2;
          outline-offset: 2px;
        }
      </style>
      <button type="button"><slot></slot></button>
    `;
	}
	connectedCallback() {
		this.shadowRoot.querySelector("button").addEventListener("click", () => {
			const targetId = this.getAttribute("for");
			if (!targetId) return;
			const popup = document.getElementById(targetId);
			if (popup && typeof popup.open === "function") popup.open();
		});
	}
}
customElements.define("popup-openner", PopupOpenner);
