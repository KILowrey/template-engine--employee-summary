// FINISHED: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const fs = require('fs');
const util = require('util');
const path = require("path");
const inquirer = require('inquirer');
const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole = () => "Engineer";
  getGithub = () => this.github;
}
module.exports = Engineer;