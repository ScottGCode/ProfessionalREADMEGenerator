// A function that returns a license badge based on which license is passed in if there is no license, return an empty string.
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `![GitHub License](https://img.shields.io/badge/license-${license}-brightgreen.svg)`
  }
  return ""
}

// A function that returns the license link if there is no license, return an empty string.
function renderLicenseLink(license) {
  if (license !== "None"){
    return (`- [License](#license)`)
  }
  return ""
}

// A function that returns the license section of README if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      Copyright @ ${license}. All rights reserved.
      Licensed under the ${license} license.`
      )
  }
  return ""
}

// Function to generate markdown for README. 
function generateMarkdown(data) {
  return ` # ${data.title}

  ${renderLicenseBadge(data.license)}

  
  ## Description 

  ${data.description}

  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation

  ${data.installation}

  
  ## Usage

  ${data.usage}

  
  ${renderLicenseSection(data.license)}

  
  ## Contributing
  
  ${data.contributing}

  
  ## Tests

  ${data.tests}

  
  ## Questions 

  * GitHub: ${data.github} 

  * [Link To GitHub Profile](https://github.com/${data.github})

  For any additional questions please email me --> <${data.email}>

`;
}

module.exports = generateMarkdown;
