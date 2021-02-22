module.exports = class {
  data() {
    return {
      title: "home",
      permalink: "/",
    };
  }

  render(data) {
    return data.collections.all
      .map((d) => {
        return `<a href="${d.data.page.url}">${d.data.title}</a>`;
      })
      .join(" ");
  }
};
