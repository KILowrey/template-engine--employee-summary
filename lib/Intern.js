// FINISHED: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const fs = require('fs');
const util = require('util');
const path = require("path");
const inquirer = require('inquirer');
const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole = () => "Intern";
  getSchool = () => this.school;
}
module.exports = Intern;