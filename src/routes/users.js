const router = require("express").Router();

module.exports = db => {
  router.get("/users", (request, response) => {
    db.query(
      `
      SELECT * from users;
    `
    ).then(({ rows: days }) => {
      response.json(days);
    });
  });

  return router;
};
