const express = require("express");

const app = express();

app.get("/quote", function (req, res, next) {
  res.json({
    quote:
      "As You dive deeper into Web Development, Web Development will dive deeper into You!",
  });
});

app.listen(3000);
