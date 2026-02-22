const router = require("express").Router();
const { sql, pool } = require("../db");

router.get("/", async (req, res) => {
  const db = await pool;
  const result = await db
    .request()
    .query("SELECT * FROM tasks ORDER BY created_at DESC");

  res.render("index", { tasks: result.recordset });
});

router.post("/add", async (req, res) => {
  const db = await pool;

  await db
    .request()
    .input("title", sql.NVarChar, req.body.title)
    .input("subject", sql.NVarChar, req.body.subject)
    .query("INSERT INTO tasks (title, subject) VALUES (@title,@subject)");

  res.redirect("/");
});

module.exports = router;
