const generateAbout = aboutText => {
    if (!contentsText) {
        return '';
    }
    return `
    <section class="my-3" id "about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${contentsText}</p>
    </section>
    `;
};

const generateQuestions = questionsArr => {
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${questionsArr
            .filter(({ feature }) => feature)
            .map(({ name, contents  }) => {
                return `
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Table of contents:
                ${contents.join(', ')}
              </h5>
              <h5>Discription</h5>
              <p>${description}</p>
              <h5>Installation Instructions</h5>
              <p>${Instructions}</p>
              <h5>Usage</h5>
              <p>${Usage}</p>
              <h5>Contribution</h5>
              <p>${Contribution}</p>
              <h5>Test</h5>
              <p>${Test}</p>
              <h5>License</h5>
              <p>${License}</p>
              <a href="${github.link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
            })
            .join('')}
            </div>
        </section>
        `}

module.exports = (questionData) => {
        console.log(questionData);
        //destructure projects and about data from templateData based on their property key names 
        const { contents, description, Instructions, Usage, Contribution, Test, License, ...header } = questionData;

        return `
      <!DOCTYPE html>
      <html lang="en">
    
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
    
      <body>
        <header>
          <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        </header>
        <main class="container my-5">
              ${generateContents(contents)}
              ${generateProjects(questions)}
        </main>
        <footer class="container text-center py-3">
          <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
        </footer>
      </body>
      </html>
      `;
    };