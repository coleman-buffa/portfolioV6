import axios from "axios";

export default {
  //Get all projects
  getProjects: function () {
    return axios.get("/project/all");
  },
  //Scan through project list and create an array that
  //contains a unique entry for each skill
  getSkills: function () {
    return axios.get("/skills/all");
  }
};