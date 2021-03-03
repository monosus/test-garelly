(async () => {
  const articles = await fetch(
    "https://newslearn.microcms.io/api/v1/articles",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "df68ab28-676e-4ccb-8b09-def322a0ad8b",
      },
    }
  );

  const rows = await articles.json();
  const list = document.createElement("ul");
  const news = document.getElementById("news");
  rows.contents.map((row) => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    const img = document.createElement("img");
    console.log(row);
    img.src = `${row.image.url}?h=100`;
    img.loading = `lazy`;
    const link = `./news/detail/index.html?id=${row.id}`;
    const title = document.createTextNode(row.title);
    anchor.href = link;

    anchor.appendChild(title);
    anchor.appendChild(img);
    li.appendChild(anchor);
    list.appendChild(li);
  });
  news.appendChild(list);
})();
