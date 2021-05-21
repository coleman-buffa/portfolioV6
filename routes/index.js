const router = require("express").Router();
const Project = require("../models/project.js");

//Retrieve all projects
router.get("/project/all/", (req, res) => {
  Project.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err)
    });
});

//Retrieve project list by category
router.get("/project/:category", (req, res) => {
  Project.find({
    category: req.params.category
  })
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err)
  });
});

router.get("/skills/all", (req, res) => {
  //Query for all skills associated with all projects
  Project.find({})
    .select("skills")
    .then(data => {
      let skillArr = [];
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].skills.length; j++) {
          let tempSkill = data[i].skills[j];
          if (skillArr.indexOf(tempSkill) < 0) {
            skillArr.push(tempSkill);
          }
        }
      }
      res.json(skillArr.sort());
    })
    .catch(err => {
      res.json(err)
    });
});

module.exports = router;