// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `![GitHub License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
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
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Title

  ${data.title}
  
  ## Description 

  ${data.description}

  ## Installation

  ${data.intallation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License 

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
