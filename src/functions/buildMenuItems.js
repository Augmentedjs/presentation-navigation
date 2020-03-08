// data structure = { id: "itemID", "click": "event", "icon": "web", "title": "something", "spacer": false }
const buildMenuItems = (name, data, tooltip) => {
  let items = "";
  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + '<div class="spacer"></div>';
      } else {
        items = items + `
          <div id="${data[i].id}" data-${name}="${data[i].id}" ${(data[i].click) ? 'data-click="' + data[i].click + '"' : ""} ${(tooltip) ? ' title="' + data[i].title + '"' : ''}>
            ${( (data[i].icon) ? ('<i class="material-icons md-dark">' + data[i].icon + '</i>') : '' )}${(tooltip) ? "" : data[i].title}
          </div>
        `;
      }
    }
  }
  return items;
};

export default buildMenuItems;
