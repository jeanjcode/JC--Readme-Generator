const renderBadge = function (license) {
  if (license !== "No License") {
    return `<img src="https://img.shields.io/badge/LICENSE-${license}-brightgreen.svg">`;
  } else {
    return "";
  }
};

const renderLicense = function (license) {
  if (license !== "No License") {
    return ` ## License 
    Project License ${license}`;
  } else {
    return "";
  }
};

function renderReadmeTemplate (questions) {
  return `# ${questions.title}
  
  ${renderBadge(questions.license)}

  ## Description 
    ${questions.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license) 
  * [Questions](#questions)

    ## Installation 
    Steps required to install the project:
    ${questions.installation}

    ## Usage 
    Instructions to use application:
    ${questions.usage}

    ## Contributing 
    ${questions.contribution}
    
    ## Tests  
    How to run tests:  
    ${questions.tests}

    ${renderLicense(questions.license)}

    ## Questions
    If you have any additional questions about this project:
    - Email: ${questions.email}.
    - Github: https://github.com/${questions.github}`;
};

module.exports = renderReadmeTemplate;
