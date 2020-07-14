import { Dom } from "presentation-dom";
import AbstractToolbar from "../toolbar/abstractToolbar.js";
import buildNavItems from "../functions/buildNavItems.js";

/**
 * A Navigation Menu
 * @extends AbstractToolbar
 */
class NavigationMenu extends AbstractToolbar {
  constructor(options) {
    if (!options) {
      options = {};
    }
    if (!options.tagName) {
      options.tagName = "nav";
    }
    if (!options.style) {
      options.style = "navigation";
    } else {
      options.style = `${option.style} navigation`;
    }

    super(options);
  };
  /**
   * Renders the Menu
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (this.isInitalized) {
      this.template = null;//"notused";
      if (this.el) {
        const e = Dom.selector(this.el);
        if (e) {
          // the menu
          Dom.addClass(e, "navigation");
          e.setAttribute(`data-${this.name}`, "navigation-menu");
          e.innerHTML = buildNavItems(this.name, this.menuItems);
        }
        this.delegateEvents();
        this.syncAllBoundElements();
      } else {
        console.warn(`AUGMENTED: Navigation "${this.name}" no element anchor, not rendering.`);
      }
    } else {
      console.warn(`AUGMENTED: Navigation "${this.name}" Can't render yet, not initialized!`);
    };
    return this;
  };
};

export default NavigationMenu;
