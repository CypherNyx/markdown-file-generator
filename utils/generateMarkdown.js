// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license.length === 0){
    return ''
  } else if (license == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  } else if (license == 'Mozilla'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if(license == 'GNU'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license == 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.length === 0){
    return ''
  } else if (license == 'Apache'){
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if(license == 'GNU'){
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license == 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  } else if (license == 'Mozilla'){
    return 'https://opensource.org/licenses/MPL-2.0'
  } 
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) {
    return ""
  } else {
    return `## License
  ${renderLicenseBadge(license)}
  
  ${renderLicenseLink(license)} 
    `
  }
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.test}

  ## Contributing
  ${data.contributing}

  ${renderLicenseSection(data.license)}

  ## Questions
  GitHub [${data.username}](https://github.com/${data.username})<br>
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
