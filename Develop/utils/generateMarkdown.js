// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Academic Free License v3.0") {
    return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-violet)]";
  } else if (license === "Artistic license 2.0") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
  } else if (license === "Microsoft Public License") {
    return "[![License: MS-PL](https://img.shields.io/badge/License-MS--PL-red)]";
  } else if (license === "Open Software License 3.0") {
    return "[![License: OSL-3.0](https://img.shields.io/badge/License-OSL--3.0-orange)]";
  } else if (license === "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Artistic license 2.0") {
    return "(https://opensource.org/licenses/Artistic-2.0)";
  } else if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla Public License 2.0") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "The Unlicense") {
    return "(http://unlicense.org/)";
  } else if (license === "Academic Free License v3.0") {
    return "(https://opensource.org/license/afl-3-0-php)";
  } else if (license === "Microsoft Public License") {
    return "(https://opensource.org/license/ms-pl-html)";
  } else if (license === "Open Software License 3.0") {
    return "(https://opensource.org/license/osl-3-0-php)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

This application is covered under the [${license}]${renderLicenseLink(
    license
  )} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license) + renderLicenseLink(data.license)}
---
## Description

${data.description}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributions

${data.credits}

## Tests

${data.tests}

## Questions

Any Questions? Click a link below to visit my GitHub and/or email me!

For emails, please use this format in the subject line: 'GitHub: {NAME_OF_REPOSITORY}'

[GitHub](https://github.com/${data.ghName})\n
[Email](mailto:${data.email})

`;
}

module.exports = {
  generateMarkdown,
};
