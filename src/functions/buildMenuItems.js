import { SPACER } from "./constants.js";

const buildMenuItems = (name, data, tooltip) => {
  let items = "";
  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + SPACER;
      } else {
        let levelStart = "", levelEnd = "";
        if (data[i].level && data[i].level > 0) {
          if (data[i].level > 6) {
            data[i].level = 6;
          }
          levelStart = `<h${data[i].level}>`;
          levelEnd = `</h${data[i].level}>`;
        }

        items = items + `
          <div ${(data[i].label) ? 'class="label"' : ""} id="${data[i].id}" data-${name}="${data[i].id}" ${(data[i].click) ? 'data-click="' + data[i].click + '"' : ""} ${(tooltip) ? ' title="' + data[i].title + '"' : ''}>
            ${levelStart}
              ${( (data[i].icon) ? ('<i class="material-icons md-dark">' + data[i].icon + '</i>') : '' )}${(tooltip) ? "" : data[i].title}
            ${levelEnd}
          </div>
        `;
      }
    }
  }
  return items;
};

export default buildMenuItems;
