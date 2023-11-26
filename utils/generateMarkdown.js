// If there is no license, return an empty string else render badges
function renderLicenseBadge(license) {

  if(license !=='None'){
    //connect to github license images
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  //return empty string
  return '';
}

// If there is no license, return an empty string else renders link
function renderLicenseLink(license) {
  if(license !== 'None'){
    return `\n* [License](#license)\n`;
  }
  return '';
}

// If there is no license, return an empty string else creates license section
function renderLicenseSection(license) {
  if(license !== 'None'){
    return `## License
      This project is licensed under the ${license} license.`;
  }
  return '';
}

// generates markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}
${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Conetents
  - [Installation](##installation)
  - [Usage](#usage)
    ${renderLicenseLink(data.license)}
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contribute](#contribute)
  - [Tests](#tests)
  -[Contact](#contact)

  ## Installation

  To install required dependencies, run the following command:


  ${data.installation}


  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}


  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Features
  ${data.features}

  ## Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}
 
  ## Contact
  If you have questions about the repo, open an issue or contact me at ${
    data.email
  }. To find more of my work go to [${data.github}](https://github.com/${
    data.github
  }/).
`;
}

module.exports = generateMarkdown;
