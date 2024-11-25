import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from 'react';
import './App.css';
import socialGameboxImage from './assets/socialgamebox.png';
import buddyBlockImage from './assets/buddyblock.png';
import newKneeImage from './assets/newknee.png';
import gymdymImage from './assets/gymdym.png';
import audioAnkiImage from './assets/audioanki.png';
import startHackImage from './assets/starthack.png';
import kapImage from './assets/kap.png';
import tableNowImage from './assets/tablenow.png';
import greenhouseImage from './assets/greenhouse.png';
import pfandImage from './assets/pfand.jpeg';
import iPraktikumImage from './assets/ipraktikum.png';
import truffleAiImage from './assets/truffleai.png';
import Modal from './components/Modal';
import Datenschutz from './components/Datenschutz';
import Impressum from './components/Impressum';
import tumcarbon from './assets/tumcarbon.png';
import teahouseGif from './assets/teahouse.gif';

function App()
{
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  const [isGridLayout, setIsGridLayout] = useState(isMobile);
  const [modalContent, setModalContent] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const myProjects = [
    {
      id: 1,
      title: "Social Gamebox",
      link: "https://socialgamebox.app",
      company: "Personal Project",
      image: socialGameboxImage,
      tags: ["Flutter", "Firebase", "CI/CD"],
      description: <>A set of games for real life, designed to maximize <span className="highlight">meaningful conversations</span> and minimize distractions. Launching <span className="highlight">early 2025</span>.</>,
      descriptionsimple: "A set of games for real life, designed to maximize meaningful conversations and minimize distractions. Launching early 2025."
    },
    {
      id: 2,
      title: "Buddy Block",
      link: "https://buddyblock.online/",
      company: "Personal Project",
      image: buddyBlockImage,
      tags: ["Flutter", "Firebase"],
      description: <>End doomscrolling through <span className="highlight">social accountability</span>. Request screen time from friends - they choose to <span className="highlight">accept or deny</span>. Because self-control doesn't work.</>,
      descriptionsimple: "End doomscrolling through social accountability. Request screen time from friends - they choose to accept or deny. Because self-control doesn't work."
    },
    {
      id: 3,
      title: "NewKnee",
      link: "",
      company: "Bachelor's Thesis",
      image: newKneeImage,
      tags: ["Python", "PyTorch", "Swift"],
      description: <>Mobile app using <span className="highlight">machine learning</span> to track knee surgery recovery. Analyzes smartphone sensor data to provide objective insights on <span className="highlight">recovery progress</span> .</>,
      descriptionsimple: "Mobile app using machine learning to track knee surgery recovery. Analyzes smartphone sensor data to provide objective insights on recovery progress."
    },
    {
      id: 4,
      title: "Gymdym",
      link: "",
      company: "Personal Project",
      image: gymdymImage,
      tags: ["Swift", "Python"],
      description: <>Simple but effective watchOS workout tracker. Uses watch sensors to <span className="highlight">automatically count reps</span> and sets. Makes gym logging fun and effortless.</>,
      descriptionsimple: "Simple but effective watchOS workout tracker. Uses watch sensors to automatically count reps and sets. Makes gym logging fun and effortless."
    },
    {
      id: 5,
      title: "AudioAnki",
      link: "",
      company: "Personal Project",
      image: audioAnkiImage,
      tags: ["Swift", "iOS"],
      description: <>Transform Anki decks into <span className="highlight">audio playlists</span>. Perfect for learning while cooking, commuting, or working out. Makes studying <span className="highlight">location-independent</span>.</>,
      descriptionsimple: "Transform Anki decks into audio playlists. Perfect for learning while cooking, commuting, or working out. Makes studying location-independent."
    },
    {
      id: 6,
      title: "START Hack",
      link: "https://github.com/TheNewReducers/flutter_app",
      company: "Hackathon",
      image: startHackImage,
      tags: ["Flutter", "Python", "OpenAI", "FastAPI"],
      description: <>CarbonDiet: Scan grocery receipts to <span className="highlight">calculate your carbon footprint</span>. Uses AI to recognize items and provide <span className="highlight">actionable insights</span> for sustainable shopping.</>,
      descriptionsimple: "CarbonDiet: Scan grocery receipts to calculate your carbon footprint. Uses AI to recognize items and provide actionable insights for sustainable shopping."
    }
  ];

  const uniProjects = [
    {
      id: 1,
      title: "UltraAssist",
      link: "",
      company: "University Project",
      image: kapImage,
      tags: ["React", "Docker", "Go", "Python"],
      description: <>Using <span className="highlight">AI-powered ultrasound analysis</span> to detect leprosy in early stages. Helps prevent disabilities through <span className="highlight">early diagnosis</span> in resource-constrained regions.</>,
      descriptionsimple: "Using AI-powered ultrasound analysis to detect leprosy in early stages. Helps prevent disabilities through early diagnosis in resource-constrained regions."
    },
    {
      id: 2,
      title: "iPraktikum",
      link: "https://www.linkedin.com/posts/skrusche_celebrating-the-ipraktikum-design-review-ugcPost-7204798861704327168-T7OQ/?utm_source=share&utm_medium=member_desktop",
      company: "University Project",
      image: iPraktikumImage,
      tags: ["Swift", "SwiftUI", "VisionOS", "Blender"],
      description: <>First 3D urban planning tool for <span className="highlight">Apple Vision Pro</span>. Transforms complex city data into <span className="highlight">immersive experiences</span> for better decision-making.</>,
      descriptionsimple: "First 3D urban planning tool for Apple Vision Pro. Transforms complex city data into immersive experiences for better decision-making."
    },
    {
      id: 3,
      title: "TruffleAI",
      link: "",
      company: "University Project",
      image: truffleAiImage,
      tags: ["React", "Next.js", "TailwindCSS"],
      description: <>Startup <span className="highlight">discovery platform</span> for La Famiglia VC, that identifies promising tech projects and provides <span className="highlight">actionable insights</span> for investors.</>,
      descriptionsimple: "Startup discovery platform for La Famiglia VC, that identifies promising tech projects and provides actionable insights for investors."
    },
    {
      id: 4,
      title: "TableNow",
      link: "https://github.com/DamianGrosz2/TableNow",
      company: "University Project",
      image: tableNowImage,
      tags: ["JavaScript", "React"],
      description: <>Streamlined <span className="highlight">restaurant booking platform</span>. Makes table reservations effortless for customers and management easier for restaurants.</>,
      descriptionsimple: "Streamlined restaurant booking platform. Makes table reservations effortless for customers and management easier for restaurants."
    }
  ];

  const funProjects = [
    {
      id: 1,
      title: "Greenhouse",
      link: "",
      company: "Personal Project",
      image: greenhouseImage,
      tags: ["Upcycling", "DIY", "Sustainability"],
      description: <>Got tired of snails eating our veggies, so I went around collecting <span className="highlight">old windows</span> from houses being demolished. Turned them into a greenhouse.</>,
      descriptionsimple: "Got tired of snails eating our veggies, so I went around collecting old windows from houses being demolished. Turned them into a greenhouse."
    },
    {
      id: 2,
      title: "Teahouse",
      link: "",
      company: "Personal Project",
      image: teahouseGif,
      tags: ["Woodworking", "Design"],
      description: <>A shelf to store tea with a fun door.</>,
      descriptionsimple: "A shelf to store tea with a fun door."
    },
    {
      id: 3,
      title: "Pfandflaschensammelbox",
      link: "",
      company: "Personal Project",
      image: pfandImage,
      tags: ["Environmental", "Social Impact", "Design"],
      description: <>Created a recycling box with a <span className="highlight">basketball hoop on top</span> for my school. Recyclable bottles aren't wasted, and the deposit money goes to <span className="highlight">environmental causes</span> - win-win!</>,
      descriptionsimple: "Created a recycling box with a basketball hoop on top for my school. Recyclable bottles aren't wasted, and the deposit money goes to environmental causes - win-win!"
    }
  ];

  // Combine all projects for grid view
  const allProjects = [...myProjects, ...uniProjects];

  const handleProjectClick = (project) =>
  {
    setSelectedProject(project);
  };

  const handleModalClose = () =>
  {
    setSelectedProject(null);
    setModalContent(null);
  };

  useEffect(() =>
  {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Update state when viewport size changes
    const handleResize = (e) =>
    {
      setIsMobile(e.matches);
      if (e.matches)
      {
        setIsGridLayout(true);
      }
    };

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="name">Damian Groß</div>
        {!isMobile && (
          <div className="layout-toggle">
            <button onClick={() => setIsGridLayout(false)} className={!isGridLayout ? 'active' : ''}>☰</button>
            <button onClick={() => setIsGridLayout(true)} className={isGridLayout ? 'active' : ''}>⊞</button>
          </div>
        )}
      </header>

      {isGridLayout || isMobile ? (
        <>
          <div className="grid-view">
            <div className="grid-item">
              <div className="grid-title">
                <h2 className="section-title">My projects</h2>
              </div>
            </div>
            {allProjects.map(project => (
              <div key={project.id} className="grid-item">
                <div
                  className="grid-image"
                  onClick={() => handleProjectClick(project)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="hover-content">
                    <p>{project.descriptionsimple}</p>
                  </div>
                </div>
                {project.link ? (
                  <a href={project.link} style={{ textDecoration: 'none' }}>
                    <span className="title has-link">{project.title}</span>
                  </a>
                ) : (
                  <span className="title">{project.title}</span>
                )}
                <span className="company">{project.company}</span>
              </div>
            ))}
            <div className="grid-item">
              <div className="grid-image">
                <img src={tumcarbon} alt="Other websites" />
                <div className="hover-content">
                  <div className="websites-line">
                    <a href="https://www.tumcarbon.com/">TUM Carbon ↗</a>
                  </div>
                  <div className="websites-line">
                    <a href="https://etherisc.com/">Etherisc ↗</a></div>
                  <div className="websites-line">
                    <a href="https://www.startmunich.de/">START Munich ↗</a>
                  </div>
                  <div className="websites-line">
                    <a href="https://nexusmutual.io/">Nexus Mutual ↗</a>
                  </div>
                </div>
              </div>
              <span>Other Websites</span>
            </div>
          </div>
          <div className="grid-view">
            <div className="grid-item">
              <div className="grid-title">
                <h2 className="section-title">Real life builds</h2>
              </div>
            </div>
            {funProjects.map(project => (
              <div key={project.id} className="grid-item">
                <div
                  className="grid-image"
                  onClick={() => handleProjectClick(project)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="hover-content">
                    <p>{project.descriptionsimple}</p>
                  </div>
                </div>
                {project.link ? (
                  <a href={project.link} style={{ textDecoration: 'none' }}>
                    <span className="title has-link">{project.title}</span>
                  </a>
                ) : (
                  <span className="title">{project.title}</span>
                )}
                <span className="company">{project.company}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <ProjectSection title="My Projects" projects={myProjects} />
          <ProjectSection title="University Projects" projects={uniProjects} />
          <ProjectSection title="Fun Projects" projects={funProjects} />
        </>
      )}

      <footer className="footer">
        <div className="footer-legal">
          <a href="#" onClick={(e) =>
          {
            e.preventDefault();
            setModalContent('datenschutz');
          }}>Datenschutzerklärung</a>
          <a href="#" onClick={(e) =>
          {
            e.preventDefault();
            setModalContent('impressum');
          }}>Impressum</a>
        </div>
        <div className="footer-social">
          <a href="https://github.com/DamianGrosz2" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/damian-groß-59704b1bb/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.goodreads.com/user/show/171275614-damian-gro" target="_blank" rel="noopener noreferrer">Goodreads</a>
        </div>
      </footer>

      <Modal
        isOpen={selectedProject !== null}
        onClose={handleModalClose}
      >
        {selectedProject && (
          <div className="project modal-project">
            <div className="project-content">
              <div className="project-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="project-text">
                <h3>
                  {selectedProject.link ? (
                    <a href={selectedProject.link} style={{ textDecoration: 'none' }}>
                      <span className="title has-link">{selectedProject.title}</span>
                    </a>
                  ) : (
                    <span className="title">{selectedProject.title}</span>
                  )}
                </h3>
                <span className="company">{selectedProject.company}</span>
                <p>{selectedProject.description}</p>
                <div className="tags">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={modalContent !== null}
        onClose={handleModalClose}
      >
        {modalContent === 'datenschutz' && <Datenschutz />}
        {modalContent === 'impressum' && <Impressum />}
      </Modal>
    </div>
  );
}

const ProjectSection = ({ title, projects }) =>
{
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-87%"]);

  return (
    <section ref={targetRef} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="viewport-container">
        <motion.div style={{ x }} className="project-container">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isGridLayout={false} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isGridLayout }) =>
{
  if (isGridLayout)
  {
    return (
      <div className="project">
        <div className="project-content">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-text">
            <p>{project.description}</p>
          </div>
        </div>
        <h3><a href={project.link}>{project.title}</a></h3>
      </div>
    );
  }

  return (
    <div className="project">
      <div className="project-content">
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-text">
          <h3>{project.link ? (
            <a href={project.link} style={{ textDecoration: 'none' }}>
              <span className="title has-link">{project.title}</span>
              {/* ↗ */}
            </a>
          ) : (
            <span className="title">{project.title}</span>
          )}</h3>
          {/* <span className="company">{project.company}</span> */}
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
