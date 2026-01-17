import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronDown, Hand } from 'lucide-react';
import profilePic from './assets/profile.png';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ratiosRef = useRef({});

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'leadership', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sectionIds.forEach((id) => (ratiosRef.current[id] = 0));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });
        const [topId] =
          Object.entries(ratiosRef.current).sort((a, b) => b[1] - a[1])[0] || [];

        if (topId) setActiveSection(topId);
      },
      {
        rootMargin: '-80px 0px -10% 0px',
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: [
      'Java',
      'Python',
      'JavaScript',
      'SQL',
      'C',
      'R',
      'HTML',
      'CSS'
    ],

    frameworks: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'NoSQL',
      'REST APIs',
      'AWS',
      'Tailwind',
      'CI/CD Pipelines',
      'QuickFIX/J',
      'FIX Protocol'
    ],

    tools: [
      'Git',
      'GitHub',
      'GitLab',
      'Postman',
      'Jira',
      'Confluence',
      'Vitest',
      'Pytest',
      'VS Code',
      'IntelliJ',
      'PyCharm'
    ],

    softSkills: [
      'Ownership',
      'Accountability',
      'Problem Solving',
      'Debugging',
      'Team Collaboration',
      'Clear Communication',
      'Leadership',
      'Adaptability',
      'Growth Mindset',
      'Agile / Scrum'
    ]
  };

  const experiences = [
    {
      title: 'Digital Accessibility & Content Assistant',
      company: 'Stony Brook University',
      location: 'Stony Brook, NY',
      period: 'Dec 2025 – Current',
      highlights: [
        'Enhanced availability, accessibility, and performance of university web platforms serving 27,000+ users by refactoring semantic HTML, ARIA attributes, DOM structure, and navigation flows in compliance with WCAG standards.',
        'Optimized frontend components within a CMS-driven production environment, improving maintainability, cross-browser compatibility, and long-term scalability.',
        'Collaborated with content owners and technical stakeholders to audit accessibility issues, deploy fixes, and validate improvements using automated and manual testing workflows.'
      ]
    },
    {
      title: 'PDAC Spatial Transcriptomics Computational Research Assistant',
      company: 'Stony Brook University – Department of Pathology',
      location: 'Stony Brook, NY',
      period: 'Nov 2025 – Current',
      highlights: [
        'Developed Python-based data pipelines using Scanpy, Squidpy, NumPy, and Pandas to ingest, preprocess, and analyze large-scale spatial transcriptomics datasets.',
        'Engineered reusable data transformation and visualization modules with Matplotlib to support multi-panel spatial analyses, including tumor vs. microenvironment comparisons and clustering overlays.',
        'Wrote modular, reproducible, and maintainable code to support scalable experimentation, rapid iteration across datasets, and reproducible research workflows.'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Cantor Fitzgerald / BGC Group',
      location: 'New York, NY',
      period: 'Jun 2025 – Aug 2025',
      highlights: [
        'Built Java backend services for a distributed trading client using QuickFIX/ J, implementing FIX session management, message validation, sequencing, and fault - tolerant workflows.',
        'Designed and implemented backend components supporting live automated(CLI) and interactive(GUI) trading workflows, emphasizing low - latency performance and reliability at scale.',
        'Participated in Agile / Scrum SDLC, contributing to sprint planning, code reviews, debugging, QA validation, and production issue resolution.',
        'Applied software engineering best practices to deliver clean, testable, and production - ready code in a high - stakes financial systems environment.'
      ]
    },
    {
      title: 'Web Developer',
      company: '12 Pell',
      location: 'New York, NY',
      period: 'Jul 2024 – Aug 2024',
      highlights: [
        'Built responsive, full-stack web interfaces using HTML, CSS, and JavaScript, supporting high-traffic workloads (~2.5M requests/min).',
        'Optimized frontend performance and responsiveness to ensure consistent user experience under heavy load.',
        'Managed and optimized social media and digital content pipelines, contributing to engagement with 350,000+ users across platforms.'
      ]
    }
  ];

  const projects = [
    {
      name: 'Playlister',
      tech: 'JavaScript, React, Express, Node.js, MongoDB',
      description: 'Full-stack web app for creating and managing YouTube-based playlists with authenticated user flows',
      highlights: ['Handled 7,000+ songs and 400 playlists', 'Implemented CRUD functions with undo/redo', 'Cloud-native RESTful APIs'],
      github: 'https://github.com/Nicole-l1/316-FinalProject-Lui-Leung-Nicole'
    },
    {
      name: 'Hotel Booking Prediction',
      tech: 'Python, Pandas, scikit-learn',
      description: 'ML models to identify booking cancellation patterns',
      highlights: ['91% accuracy and 0.86 F1 score', 'Logistic Regression, Random Forest, K-NN'],
      github: 'https://github.com/Nicole-l1/Hotel-Booking-Cancellation-Predictions'
    },
    {
      name: 'NetTrack',
      tech: 'JavaScript, React, Tailwind, Firebase',
      description: 'Web app for synchronized Netflix activity with real-time communication',
      highlights: ['Real-time sync between users', 'TMDb API integration'],
      github: 'https://github.com/Nicole-l1/NetTrack'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const contactBtn = "flex items-center justify-center gap-3 px-8 py-4 border-2 border-violet-500/50 rounded-lg font-semibold hover:bg-violet-500/10 transition-all duration-300";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Sora:wght@300;400;600;700&display=swap');
        
        * {
          font-family: 'Sora', sans-serif;
        }
        
        .mono {
          font-family: 'Space Mono', monospace;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-glow {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
 
        .card-glow:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
        }

        .section-appear {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .skill-tag {
          transition: all 0.3s ease;
        }
        
        .skill-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(167, 139, 250, 0.3);
        }
        
        .nav-dot {
          transition: all 0.3s ease;
        }
        
        .nav-dot.active {
          background: linear-gradient(135deg, #a78bfa, #ec4899);
          transform: scale(1.2);
        }
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .typing-cursor {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(167, 139, 250, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 139, 250, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .hero-glow {
          filter: drop-shadow(0 0 80px rgba(167, 139, 250, 0.2));
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="mono text-xl font-bold gradient-text">NL</div>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'experience', 'education', 'projects', 'skills', 'leadership', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${activeSection === section
                    ? 'text-violet-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/nicoleluileung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-violet-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:lleung.nicole@gmail.com"
                className="text-slate-400 hover:text-violet-400 transition-colors"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://github.com/Nicole-l1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-violet-400 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-slate-950"></div>

        <div className={`max-w-6xl mx-auto px-6 text-center z-10 ${isVisible ? 'section-appear' : ''}`}>

          <div className="flex justify-center mb-6">
            <img
              src={profilePic}
              alt="Nicole Lui-Leung profile"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover
          border-4 border-violet-500/40
          shadow-lg shadow-violet-500/30
          hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Nicole Lui-Leung</span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
            Software Engineer & Full-Stack Developer
          </p>

          <p className="mono text-lg text-slate-400 mb-8">
            {'>'} Computer Science @ Stony Brook University <span className="text-violet-400">|</span> AI/Data Science Specialization
            <span className="typing-cursor text-violet-400">_</span>
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-violet-500/50 rounded-lg font-semibold hover:bg-violet-500/10 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
          <div className="mt-12">
            <ChevronDown className="mx-auto animate-bounce text-violet-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Hand className="text-violet-400" size={32} strokeWidth={2} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Hi, I’m Nicole! I’m currently pursuing a Bachelor of Science in Computer Science
              with a minor in Finance at Stony Brook University, specializing in Artificial
              Intelligence and Data Science. I am a junior, with an expected graduation date
              of May 2027.
            </p>

            <p>
              I’m an aspiring software engineer who enjoys building reliable, scalable
              software and solving complex problems through thoughtful design and clean
              code. Through hands-on projects, research, and internship experience,
              I’ve developed a strong foundation in data structures, algorithms,
              full-stack development, and backend systems, while learning how to write
              maintainable, production-ready code.
            </p>

            <p>
              I bring a strong sense of ownership, persistence, and leadership to my
              work, whether that means driving a project forward, debugging difficult
              issues, or collaborating across teams. I’m a fast learner with a growth
              mindset, comfortable working in Agile environments, communicating
              technical ideas clearly, and adapting quickly to new technologies.
            </p>

            <p>
              Outside of coding, I enjoy graphic design, digital art, and video editing,
              which sharpen my eye for detail and influence how I think about user experience,
              visual clarity, and product design.
            </p>

            <p>
              I’m currently seeking <span className="text-violet-400 font-semibold">
                Software Engineering Internship</span> opportunities where I can
              contribute impactfully, learn from experienced engineers, and continue
              growing as a developer while building technology that matters.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Briefcase className="text-violet-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="card-glow bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">{exp.title}</h3>
                    <p className="text-xl text-violet-400 mb-1">{exp.company}</p>
                    <p className="mono text-sm text-slate-400">{exp.location}</p>
                  </div>
                  <span className="mono text-sm text-pink-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2 mt-6">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="text-violet-400 mt-1.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <GraduationCap className="text-violet-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Education</h2>
          </div>

          <div className="space-y-8">
            <div className="card-glow bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="space-y-3">
                  <p className="text-xl font-semibold text-slate-100">
                    Stony Brook University
                  </p>

                  <p className="text-lg text-violet-400">
                    B.S. in Computer Science
                  </p>

                  <div className="text-slate-300 space-y-1">
                    <p>
                      <span className="font-semibold text-slate-200">Specialization:</span>{' '}
                      AI / Data Science
                    </p>
                    <p>
                      <span className="font-semibold text-slate-200">Minor:</span>{' '}
                      Finance
                    </p>
                  </div>

                  <div className="text-slate-300 space-y-1 pt-2">
                    <p>
                      <span className="font-semibold text-slate-200">
                        Relevant Coursework:
                      </span>{' '}
                      Algorithms Analysis, Data Structures, Object-Oriented Programming,
                      Software Development, Programming Abstractions, Scripting Languages,
                      Data Science, Probability & Statistics, Principles of Finance
                    </p>
                  </div>

                </div>

                <span className="mono text-pink-400 whitespace-nowrap">
                  Aug 2023 – May 2027
                </span>
              </div>
            </div>
            <div className="card-glow bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <p className="text-xl font-semibold text-slate-100">
                    Fiorello H. LaGuardia High School of Music and Art and Performing Arts
                  </p>
                  <p className="text-lg text-violet-400 mt-1">
                    Advanced Regents Diploma
                  </p>
                  <p className="text-slate-300 mt-2">
                    <span className="font-semibold text-slate-200">Major:</span>{' '}
                    Visual Arts
                  </p>
                </div>
                <span className="mono text-pink-400 mt-4 md:mt-0">
                  Sep 2019 – Jun 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Code className="text-violet-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card card-glow bg-gradient-to-br from-slate-900/80 to-indigo-950/80 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-100">{project.name}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <p className="mono text-xs text-pink-400 mb-4">{project.tech}</p>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-2 text-sm text-slate-400">
                      <span className="text-violet-400">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Award className="text-violet-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-violet-400 mb-6 mono">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, idx) => (
                  <span
                    key={idx}
                    className="skill-tag mono text-sm px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-lg text-violet-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-pink-400 mb-6 mono">Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, idx) => (
                  <span
                    key={idx}
                    className="skill-tag mono text-sm px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-lg text-pink-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-amber-400 mb-6 mono">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, idx) => (
                  <span
                    key={idx}
                    className="skill-tag mono text-sm px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 mono">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="skill-tag mono text-sm px-4 py-2
                   bg-emerald-500/10 border border-emerald-500/30
                   rounded-lg text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Community Engagement Section */}
      <section id="leadership" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Award className="text-violet-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Leadership & Community Engagement
            </h2>
          </div>

          <div className="space-y-8">
            {/* University Leadership */}
            <div className="card-glow bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">
                University Leadership
              </h3>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-slate-100">
                      Society of Asian Scientists and Engineers
                    </p>
                    <p className="text-violet-400">Public Relations</p>
                    <p className="mono text-sm text-slate-400">Stony Brook University</p>
                  </div>
                  <span className="mono text-pink-400 mt-2 md:mt-0">
                    Oct 2024 – Present
                  </span>
                </div>
                <p className="text-slate-300">
                  Drove outreach and stakeholder engagement initiatives to expand
                  participation in STEM programming, leveraging content strategy and
                  digital platforms to strengthen visibility and community impact.
                </p>

                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-slate-100">
                      ChinaBlue
                    </p>
                    <p className="text-violet-400">President</p>
                    <p className="mono text-sm text-slate-400">Stony Brook University</p>
                  </div>
                  <span className="mono text-pink-400 mt-2 md:mt-0">
                    Jan 2023 – Present
                  </span>
                </div>
                <p className="text-slate-300">
                  Led and coordinated cross-functional teams to design and execute
                  large-scale events for 100+ attendees, overseeing planning, logistics,
                  and team collaboration while fostering an inclusive and engaging campus community.
                </p>

                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-slate-100">
                      Women in Computer Science (WICS)
                    </p>
                    <p className="text-violet-400">Member</p>
                    <p className="mono text-sm text-slate-400">Stony Brook University</p>
                  </div>
                  <span className="mono text-pink-400 mt-2 md:mt-0">
                    Aug 2024 – Present
                  </span>
                </div>
                <p className="text-slate-300">
                  Participated in technical workshops and collaborative initiatives
                  supporting diversity, mentorship, and professional development.
                </p>
              </div>
            </div>

            {/* Community Service */}
            <div className="card-glow bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">
                Community Service
              </h3>

              <ul className="space-y-4 text-slate-300">
                <li>
                  <span className="font-semibold text-slate-100">City Harvest</span>
                  <span className="block mono text-sm text-slate-400">
                     Outreach & Marketing
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-slate-100">World Wildlife Fund</span>
                  <span className="block mono text-sm text-slate-400">
                    Fundraiser
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-slate-100">Heart of Dinner (愛心餐)</span>
                  <span className="block mono text-sm text-slate-400">
                    Volunteer
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-slate-100">
                    Planned Parenthood Federation of America
                  </span>
                  <span className="block mono text-sm text-slate-400">
                    Fundraiser
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-slate-100">
                    Lincoln Guild Housing Corp
                  </span>
                  <span className="block mono text-sm text-slate-400">
                    Intergenerational Activities Coordinator
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm always open to any new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:lleung.nicole@gmail.com"
              className={contactBtn}
            >
              <Mail size={20} />
              Email Me
            </a>

            <a
              href="https://linkedin.com/in/nicoleluileung"
              target="_blank"
              rel="noopener noreferrer"
              className={contactBtn}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Nicole-l1"
              target="_blank"
              rel="noopener noreferrer"
              className={contactBtn}
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800/50">
            <p className="mono text-sm text-slate-500">
              © 2026 Nicole Lui-Leung
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
