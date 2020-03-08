import Dom from "presentation-dom";
import AbstractToolbar from "./abstractToolbar.js";
import buildMenuItems from "../functions/buildMenuItems.js";

/**
 * A Toolbar View
 * @extends AbstractToolbar
 */
class Toolbar extends AbstractToolbar {
  constructor(options) {
    super(options);
  };
  /**
   * Render the Toolbar
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (!this.isInitalized) {
      console.warn(`AUGMENTED: Toolbar "${this.name}" Can't render yet, not initialized!`);
      return this;
    }
    this.template = null;//"notused";
    if (this.el) {
      const e = Dom.selector(this.el);
      if (e) {
        // the menu
        Dom.addClass(e, "toolbar");
        e.setAttribute(`data-${this.name}`, "toolbar");
        e.innerHTML = buildMenuItems(this.name, this.menuItems, this.tooltip);
      }
    } else {
      console.warn(`AUGMENTED: Toolbar "${this.name}" no element anchor, not rendering.`);
      return this;
    }
    this.delegateEvents();
    this.syncAllBoundElements();
    return this;
  };
};

export default Toolbar;
