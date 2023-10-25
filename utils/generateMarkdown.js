// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `![GitHub License](https://img.shields.io/badge/license-${license}-brightgreen.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return (`* [License](#license)`)
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.license)}

  ## ${data.title}

  
  ## Description 

  ${data.description}

  
  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

${renderLicenseLink(data.license)}


  ## Installation

  ${data.installation}

  
  ## Usage

  ${data.usage}

 
  ## License 

  ${renderLicenseSection(data.license)}

  
  ## Contributing
  
  ${data.contributing}

  
  ## Tests

  ${data.tests}

  
  ## Questions 

  #GitHub: ${data.github}
  #Email: ${data.email}

`;
}

module.exports = generateMarkdown;
