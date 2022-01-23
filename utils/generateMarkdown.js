// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { // look at about function in portfolio generator
  if(!license){
    return ''
  }
  else {
    return `
    [${data.license}]url with svg`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(license)}

  # Table of Contents
  * [Project Description](#desc)
  * [Installation](#install)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution)
  * [Testing Instructions](#testing)
  * [Contact](#contact)
  
  <a name="desc"></a>
  ## Description
  ${data.desc}

  <a name="install"></a>
  ## Installation
  ${data.install}

  <a name="usage"></a>
  ## Usage
  ${data.usage}

  <a name="contribution"></a>
  ## Contribution Guidelines
  ${data.contrib}

  <a name="testing"></a>
  ## Testing Instructions
  ${data.test}

  <a name="contact"></a>
  ## Contact
  You can find more of my work at ${data.username} on GitHub and contact me with any questions
  at ${data.email}.

`;
}

module.exports = {generateMarkdown}
