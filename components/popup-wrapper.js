// popup-wrapper.js
class PopupWrapper extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
      <style>
				:host {
					display: block;
					position: relative;
					z-index: 1000;
				}
        .popup-backdrop {
          position: fixed;
          inset: 0;
          display: none;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.25);
        }
        .popup-backdrop[open] { display: flex; }
        .popup-content {
          position: relative;
					width: 90%;
					max-width: 400px;
          background: #555867;
          padding: 16px 24px;
          border-radius: 4px;
					box-sizing: border-box;
        }
        .close-btn {
          position: absolute;
          top: 0;
          right: 0;
					padding: 20px;
          background: none;
          border: none;
          cursor: pointer;
        }
      </style>
      <div class="popup-backdrop">
        <div class="popup-content">
          <button class="close-btn" aria-label="閉じる">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.08624 38.9134C1.52414 37.3513 1.52414 34.8186 3.08624 33.2565L33.2561 3.08665C34.8182 1.52455 37.3509 1.52455 38.913 3.08664C40.4751 4.64874 40.4751 7.1814 38.913 8.7435L8.7431 38.9134C7.181 40.4755 4.64834 40.4755 3.08624 38.9134Z" fill="white"/>
							<path d="M3.08624 8.74347C1.52414 7.18137 1.52414 4.64871 3.08624 3.08661C4.64834 1.52451 7.181 1.52451 8.74309 3.08661L38.913 33.2565C40.4751 34.8186 40.4751 37.3513 38.913 38.9134C37.3509 40.4755 34.8182 40.4755 33.2561 38.9134L3.08624 8.74347Z" fill="white"/>
						</svg>
					</button>
          <slot></slot>
        </div>
      </div>
    `;
	}
	connectedCallback() {
		this._backdrop = this.shadowRoot.querySelector(".popup-backdrop");
		this.shadowRoot
			.querySelector(".close-btn")
			.addEventListener("click", () => this.close());
		this._backdrop.addEventListener("click", (e) => {
			if (e.target === this._backdrop) this.close();
		});
	}
	open() {
		this._backdrop.setAttribute("open", "");
	}
	close() {
		this._backdrop.removeAttribute("open");
	}
}
customElements.define("popup-wrapper", PopupWrapper);
