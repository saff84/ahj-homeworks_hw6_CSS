/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Collapse.js
class Collapsible {
  constructor() {
    this.container = document.querySelector(".main_container");
  }
  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initWidget();
    });
  }
  initWidget() {
    if (!this.container) return;
    const widgetCollapsibleHtml = `
      <div data-widget="widgetCollapsible" class="widget widget_collapsible">       
        <div class="control"> 
          <button data-id="button" class="button">Collapse</button> 
        </div>
        <div data-id="widgetFooter" class="widget_footer collapsed">         
          <div class="footer_string">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.        
          </div>
        </div> 
      </div>
    `;
    this.container.insertAdjacentHTML("beforeEnd", widgetCollapsibleHtml);
    this.container.querySelector("[data-widget=widgetCollapsible]").addEventListener("click", e => {
      if (e.target.dataset.id !== "button") return;
      const widgetFooter = e.currentTarget.querySelector("[data-id=widgetFooter]");
      widgetFooter.classList.toggle("collapsed");
      widgetFooter.classList.toggle("show");
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const widgetCollaps = new Collapsible();
widgetCollaps.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;