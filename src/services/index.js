
/** put all routes together here and export out  */

const router = require("express").Router();

const articleRouter = require("./article")

const categoryRouter = require("./category")
 
const authorRouter = require("./author")
 

router.use("/article", articleRouter)

router.use("/category", categoryRouter)

router.use("/author", authorRouter)


module.exports = router