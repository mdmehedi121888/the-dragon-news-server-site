const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
const catagories = require("./data/categories.json");
const news = require("./data/news.json");
app.get("/", (req, res) => {
  res.send("dragon server is running");
});

app.get("/categories", (req, res) => {
  res.send(catagories);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id == id);
  res.send(selectedNews);
});
app.get("/category/:id", (req, res) => {
  const categoriesId = req.params.id;
  if (categoriesId == 0) res.send(news);
  else {
    const selectedCategories = news.filter(
      (c) => c.category_id == categoriesId
    );
    res.send(selectedCategories);
  }
});
app.listen(port, () => {});
