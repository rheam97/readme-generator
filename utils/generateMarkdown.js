// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'MIT'){
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
  else if (license === 'Apache') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-bright-green.svg)](https://opensource.org/licenses/${license})`
  }
  else {// may need to fix this one
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license}-licenses)`
  }
}
//  Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(`${data.license}`)}

  # Table of Contents
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Licensing](#license)
  * [Testing Instructions](#testing-instructions)
  * [Questions](#questions)
  
  <a name="description"></a>
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

  <a name="license"></a>
  ## Licensing
  This app is licensed under ${data.license}. For more information, click on the badge link above.

  <a name="testing"></a>
  ## Testing Instructions
  ${data.test}

  <a name="questions"></a>
  ## Questions
  You can find more of my work at [${data.username}](https://github.com/${data.username})
  on GitHub and contact me with any questions
  at ${data.email}.

`;
}

<<<<<<< HEAD
module.exports = generateMarkdown;
=======
module.exports = generateMarkdown
>>>>>>> develop
