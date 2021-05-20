const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: "Enter a project name"
  },
  description: {
    type: String,
    required: "Enter a project description"
  },
  image_link: {
    type: String,
    required: "Enter an image link"
  },
  repo_link: {
    type: String,
    required: "Enter the repository link"
  },
  deployed_link: {
    type: String,
    required: "Enter the deployed link"
  },
  skills: {
    type: [String],
    required: "Enter skills used"

  }
});

const Example = mongoose.model("Project", ProjectSchema);

module.exports = Example;