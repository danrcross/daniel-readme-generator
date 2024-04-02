// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const myModules = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter title of application\n:",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n     - What was your motivation?\n     - Why did you build this project?\n     - What problem does it solve?\n     - What did you learn?\n:",
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n:",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.\n:",
    name: "usage",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.\n  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\n  If you followed tutorials, include links to those here as well.\n:",
    name: "credits",
  },
  {
    type: "input",
    message: "Enter your test instructions here\n:",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your application:",
    choices: [
      "Academic Free License v3.0",
      "Artistic license 2.0",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "The Unlicense",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "Enter your GitHub username\n:",
    name: "ghName",
  },
  {
    type: "input",
    message: "Enter your email address\n:",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data + "\n", (err) =>
    err ? console.log(err) : console.log("Worked!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const rmData = myModules.generateMarkdown(response);
    writeToFile("README.md", rmData);
  });
}

// Function call to initialize app
init();
