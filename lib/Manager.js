// FINISHED: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const fs = require('fs');
const util = require('util');
const path = require("path");
const inquirer = require('inquirer');
const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole = () => "Manager";
  getOfficeNumber = () => this.officeNumber;
}
module.exports = Manager;