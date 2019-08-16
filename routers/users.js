const router = require("express").Router();
const db = require("../server/dbConfig.js");
const restricted = require("./restricted-middleware.js");
const bcrypt = require("bcrypt");

router.get("/", restricted, (req, res) => {
  db("users")
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", restricted, (req, res) => {
  let id = req.params.id;
  db("users")
    .where({ id })
    .first()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
}); //get by a specified ID

router.put("/:id", restricted, (req, res) => {
  let id = req.params.id;

  if (req.body.password) {
    const hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash;
  }

  db("users")
    .update(req.body)
    .where({ id })
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
}); //update a specified ID

module.exports = router;
