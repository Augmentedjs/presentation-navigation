import { SPACER_LIST } from "./constants.js";

const buildMenuItems = (name, data) => {
  let items = "";
  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + SPACER_LIST;
      } else {
        items = items + `
          <li ${(data[i].label) ? 'class="label"' : ""} id="${data[i].id}" data-${name}="${data[i].id}" ${(data[i].click) ? 'data-click="' + data[i].click + '"' : ""}>
            ${( (data[i].icon) ? ('<i class="material-icons md-dark">' + data[i].icon + '</i>') : '' )}${data[i].title}
          </li>
        `;
      }
    }
  }
  return items;
};

export default buildMenuItems;
