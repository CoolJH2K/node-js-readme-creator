// Link used for reference: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// Include fs and inquirer
const fs = require("fs");
const inquirer = require("inquirer");

// Sets up the generateMarkdown function
/* const generateMarkdown = ({project_name, table_of_contents, description, project_motivation, problem_solved, lessons_learned, testing, installation, app_use, credits, license}) => 
  # ${project_name}
  ## Description
  ${description}
  ### Why did I make this?
  ${project_motivation}
  ### What problem does this solve?
  ${problem_solved}
  ### What did I learn?
  ${lessons_learned}
  ## Testing
  ${testing}
  ## Installation
  ${installation}
  ## Usage
  ${app_use}
  ## Credits
  ${credits}
  ## License
  ${license}; */

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // This will use data passed in from the generateMarkdown funciton. Have a logic gate to make sure a liceprintMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }
  if () {

  } else {
    return "";
  }
  return `https://img.shields.io/badge/License-${license}-blue`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if () {

  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // This will use data passed in from the generateMarkdown function. Have a logic gate to make sure a license is chosen.
  if () {
    
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown ({project_name, table_of_contents, description, project_motivation, problem_solved, lessons_learned, testing, installation, app_use, credits, license}) {
  `# ${project_name}
  ## Table of Contents
  ${table_of_contents}
  ## Description
  ${description}
  ### Why did I make this?
  ${project_motivation}
  ### What problem does this solve?
  ${problem_solved}
  ### What did I learn?
  ${lessons_learned}
  ## Testing
  ${testing}
  ## Installation
  ${installation}
  ## Usage
  ${app_use}
  ## Credits
  ${credits}
  ## License
  ${license}`;

  return `# ${data.title}`;
  // You will need to use the license funcitons in here, passing data to the funcitons you call -- licenseFunction(data.license)
}

module.exports = generateMarkdown;
