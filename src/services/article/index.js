const router = require("express").Router();

const { response } = require("express");
const Model = require("../../utils/model")

const Article = new Model('articles');

router.get("/", async (req, res, next) => {
  try {
    const response  = await Article.findOne();
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const {rows} = await Article.findById(req.params.id);
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await Article.save(req.body);
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(500).send(e.message);
  }

});

router.put("/:id", async (req, res, next) => {
  try {
    const response = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(response);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await Article.findByIdAndDelete(req.params.id);
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/articleAuthorAndCategory/:id", async (req, res, next) => {
  try {
    const {rows} = await Article.getArticlesAuthorAndCategory(req.params.id);
    res.send(rows)
  } catch (e) {
    console.log(e);
    res.status(500).send("🔴", e);
  }
});

module.exports = router;
