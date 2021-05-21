import axios from "axios";

export default {
  //Get all projects
  getProjects: function () {
    return axios.get("/project/all");
  },
  //Get all projects by category
  getProjectsByCategory: function (category) {
    return axios.get("/project/" + category)
  },
  //Scan through project list and create an array that
  //contains a unique entry for each skill
  getSkills: function () {
    return axios.get("/skills/all");
  }
};