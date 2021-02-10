fetch("https://newslearn.microcms.io/api/v1/articles", {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "df68ab28-676e-4ccb-8b09-def322a0ad8b",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((rows) => {
    const list = document.createElement("ul");
    const news = document.getElementById("news");
    rows.contents.map((row) => {
      const li = document.createElement("li");
      const title = document.createTextNode(row.title);
      li.appendChild(title);
      list.appendChild(li);
      console.log(row);
    });
    news.appendChild(list);
  });
