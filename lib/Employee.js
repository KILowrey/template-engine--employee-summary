// FINISHED: Write code to define and export the Employee class
const fs = require('fs');
const util = require('util');
const path = require("path");
const inquirer = require('inquirer');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName = () =>this.name;
  getId = () => this.id;
  getEmail = () => this.email;
  getRole = () => "Employee";
}
module.exports = Employee;