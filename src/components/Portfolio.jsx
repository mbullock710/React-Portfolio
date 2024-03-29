import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'My Original Portfolio', deployedLink: 'https://mbullock710.github.io/My-Portfolio/', githubLink: 'https://github.com/mbullock710/My-Portfolio', image: './assets/MyPortfolio.png' },
    { title: 'Text Editor', deployedLink: 'https://text-editor-wmkd.onrender.com', githubLink: 'https://github.com/mbullock710/Text-Editor', image: './assets/TextEditor.png'  },
    { title: 'Work Day Scheduler', deployedLink: 'https://mbullock710.github.io/Work-Day-Scheduler/', githubLink: 'https://github.com/mbullock710/Work-Day-Scheduler', image: './assets/WorkDayScheduler.png'},
    { title: 'Password Generator', deployedLink: 'https://mbullock710.github.io/Password-Generator/', githubLink: 'https://github.com/mbullock710/Password-Generator', image: './assets/PasswordGenerator.png'},
    { title: 'Code Quiz', deployedLink: 'https://mbullock710.github.io/Code-Quiz/', githubLink: 'https://github.com/mbullock710/Code-Quiz', image: './assets/CodeQuiz.png'},
    { title: 'Horiseon', deployedLink: 'https://mbullock710.github.io/Horiseon/', githubLink: 'https://github.com/mbullock710/Horiseon', image: './assets/Horiseon.png'},
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>
              <a href={project.deployedLink}>Deployed Link</a> |{' '}
              <a href={project.githubLink}>GitHub Repository</a>
            </p>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
