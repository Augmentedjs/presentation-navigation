import { isObject, isString } from "next-core-utilities";
import { DecoratorView } from "presentation-decorator";

/**
  * An abstract tooldbar Component, designed to be extended<br/>
  * As an abstract it's not intented to use directly, most of the api creates
  * the toolbars and no need to pass to constructor.<br/>
  * Supported Options: <br/>
  * <ul>
  * <li>title : The title of the toolbar (most cases displays)</li>
  * <li>data : Data to pass to the toolbar as object</li>
  * <li>menuItems : The menuItems of the toolbar</li>
  * <li>tooltip : adds a tooltip</li>
  * </ul>
  * @param {object} options Options to pass
  * @extends DecoratorView
  * @abstract
  */
class AbstractToolbar extends DecoratorView {
  constructor(options) {
    if (!options) {
      options = {};
    }
    super(options);
    this.isInitalized = false,
    this._menuItems = [];
    this.title = "";

    if (this.model) {
      this.model.clear();
    }

    if (options.data && (isObject(options.data))) {
      this.model.set(options.data);
    }
    if (options.title && (isString(options.title))) {
      this.title = options.title;
    }
    if (options.menuItems && (isObject(options.menuItems))) {
      this._menuItems = options.menuItems;
    }

    if (options.tooltip) {
      this.tooltip = options.tooltip;
    } else {
      this.tooltip = false;
    }

    if (this.el && this.name) {
      this.isInitalized = true;
    }
  };

  /**
    * The model property
    * @property {Model} model The model property
    */

  /**
    * The initialized property
    * @property {boolean} isInitalized The initialized property
    */

  /**
    * The menuItems property
    * @property {array} menuItems The initialized property
    */

  /**
    * The title property
    * @property {string} title The title property
    */

  /**
    * Adds an item to the menu
    * @param id {string} The id of the itemID
    * @param click {string} The bound click method to call
    * @param icon {string} The icon name (webfont)
    * @param title {string} The title of the itemID
    * @param spacer {boolean} Sets a spacer item vs text (not clickable)
    * @example addItem({"itemID", "event", "web", "something", false });
    * @example addItem({"space", null, null, null, true });
    */
  addItem(id, click, icon, title, spacer = false) {
    if (!spacer) {
      this._menuItems.push({ "id": id, "click": click, "icon": icon, "title": title, "spacer": false });
    } else {
      this.addSpacer();
    }
  };

  /**
    * Adds a label (no click) to the menu
    * @param id {string} The id of the itemID
    * @param icon {string} The icon name (webfont)
    * @param title {string} The title of the itemID
    * @param level {number} Set the level of the title (1 = h1, 2 = h2, etc. 0 is default and just text)
    * @example addLabel({"itemID", "web", "something"});
    * @example addLabel({"itemID", "mail", "something", 1});
    */
  addLabel(id, icon = null, title, level = 0) {
    this._menuItems.push({ "id": id, "click": null, "icon": icon, "title": title, "spacer": false, "label": true, "level": level});
  };
  /**
    * Adds a spacer item to the menu
    * @example addSpacer();
    */
  addSpacer() {
    this._menuItems.push({ "id": null, "click": null, "icon": null, "title": null, "spacer": true });
  };

  get menuItems() {
    return this._menuItems;
  };

  set menuItems(items) {
    this._menuItems = items;
  };

  /**
   * Clear all items in the menu
   */
  clearMenuItems() {
    this._menuItems.length = 0;
  };

  /**
   * Select an item in the menu
   * @todo Need to do something with this
   * @param {string} id The id to select
   */
  select(id) {
    return getItem(id);
  };

  /**
   * Get an item in the menu
   * @param {string} id The id to get
   */
  getItem(id) {
    const l = this._menuItems.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      if (this._menuItems[i].id && this._menuItems[i].id === id) {
        return this._menuItems[i];
      }
    }
    return null;
  };
};

export default AbstractToolbar;
