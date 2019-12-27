const router = require("express").Router();

module.exports = db => {
  router.get("/items", (request, response) => {
    db.query(`SELECT * FROM items`).then(({ rows: interviewers }) => {
      response.json(
        interviewers.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  return router;
};
