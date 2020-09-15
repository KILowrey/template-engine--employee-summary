const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Create an array for all employees to be saved too.
let employees = [];

// Collect general data for all employees
function createEmployee() {
  inquirer
    .prompt([
      {
        name: 'name',
        message: 'What is the name of your employee? '
      },
      {
        name: 'id',
        message: "What is this employee's Company ID? "
      },
      {
        name: 'email',
        message: "What is this employee's Email? "
      }
    ])
    .then((saveEmployee) => {
      const name = saveEmployee.name;
      const id = saveEmployee.id;
      const email = saveEmployee.email;
    })
    .then(() => {
      return saveEmployee();
    });
}

// Create an Engineer. Can be called any number of times.
async function createEngineer() {
  console.log('=== New Engineer ===');
  createEmployee();
  const github = await inquirer.prompt({
    name: 'github',
    message: "What is this engineer's GitHub? "
  });
  employees.push(employee);
  console.log('Engineer Saved!');
}

// Create an Intern. Can be called any number of times.
async function createIntern() {
  console.log('=== New Intern ===');
  createEmployee();
  const school = await inquirer.prompt({
    name: 'school',
    message: "Where does this intern go to school? "
  });
  employees.push(employee);
  console.log('Intern Saved!')
}

// Create the Manager. This will only be called once.
function createManager() {
  console.log('=== Manager ===');
  createEmployee();
  // const officeNumber = await inquirer.prompt({
  //   name: 'officeNumber',
  //   message: 'What is your Office Number? '
  // });
  inquirer
    .prompt ({
      name: 'officeNumber',
      message: 'What is your Office Number? '
    })
    .then((saveManager) => {
      const officeNumber = saveManager.officeNumber;
      saveEmployee();
    })
    .then(() => {
      employees.push(employee);
      console.log("Manager Saved!");
    });
}

// The main heart and sole of the file.
async function askQuestions() {
  console.log(`
~ WELCOME TO THE EMPLOYEE SUMMARY TEMPLATE ENGINE ~
Here you will generate an HTML file for your Team!
`);
  console.log(`
First, you will enter the information for the Team Manager.
You can only enter 1 (one) team manager in this program.`);
  createManager();
  while (newEmployee === true) {
    const newEmployee = await inquirer.prompt({
      type: "confirm",
      name: "addEmployee",
      message: "Would you like to add another Employee? "
    });
    if (newEmployee === true) {
      const employType = await inquirer.prompt({
        type: "list",
        name: "employType",
        message: "Is this employee an Engineer or an Intern? ",
        choices: ["Engineer", "Intern"]
      });
      if (employeeType === "Engineer") {
        createEngineer();
      } else {
        createIntern();
      }
    } else {
      console.log(`rendering your page...`)
      renderPage();
      newEmployee = false;
    }
  }
}

// Called when all employees are added
function renderPage() {
  fs.writeFile(outputPath, html, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`
HTML File Rendered!
It can be found in the "output" folder
and will be titled "team.html"`);
  });
}

// Actual chain of events starter
askQuestions();



// DELETE ALL THIS ONCE I GET EVERYTHING WORKING

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```