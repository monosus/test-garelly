(async () => {
  const queries = window.location.search.replace(/^\?/g, "").split("&");
  let query = "";
  queries.map((q) => {
    const arr = q.split("=");
    if (arr[0] === "id") {
      query = arr[1];
    }
  });

  const articles = await fetch(
    `https://newslearn.microcms.io/api/v1/articles/${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "df68ab28-676e-4ccb-8b09-def322a0ad8b",
      },
    }
  );

  const detail = await articles.json();
  const main = document.getElementById("main");
  const id = document.createTextNode(detail.id);
  const title = document.createTextNode(detail.title);
  const heading = document.createElement("h1");
  const p1 = document.createElement("p");
  const img = document.createElement("img");
  img.src = detail.image.url;
  heading.appendChild(title);
  p1.appendChild(id);
  main.appendChild(heading);
  main.appendChild(p1);
  main.appendChild(img);
})();
