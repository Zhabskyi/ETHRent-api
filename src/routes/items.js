const router = require("express").Router();

module.exports = db => {
  router.get("/items", (req, res) => {
    db.query(`SELECT * FROM items`).then(({ rows: items }) => {
      res.json(
        items.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  // const query = {
  //   text: 'INSERT INTO items(name, email) VALUES($1, $2)',
  //   values: ['brianc', 'brian.m.carlson@gmail.com'],
  // }

  // router.post('/items', (req, res) => {
  //   item = req.body;
  // })

  return router;
};
