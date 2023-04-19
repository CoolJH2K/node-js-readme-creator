// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // This will use data passed in from the generateMarkdown funciton. Have a logic gate to make sure a license is chosen
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
    
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
  // You will need to use the license funcitons in here, passing data to the funcitons you call -- licenseFunction(data.license)
}

module.exports = generateMarkdown;
