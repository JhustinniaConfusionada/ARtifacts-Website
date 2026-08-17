import { useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#intro' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Download', href: '#download' },
];

const featureCards = [
  {
    title: 'App Feature',
    text: 'Explore curated artifacts, immersive stories, and personalized tours.',
  },
  {
    title: 'Mobile Ready',
    text: 'Designed for mobile and desktop with smooth scrolling and easy navigation.',
  },
];

const footerGroups = [
  { heading: 'Project', items: ['About', 'Download'] },
  { heading: 'Policy', items: ['Terms', 'Privacy'] },
  { heading: 'Contact', items: ['hello@artifacts.com'] },
];

function App() {
  useEffect(() => {
    const animateItems = document.querySelectorAll('section, .feature-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animateItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="brand">ARtifacts</div>
        <nav>
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="intro">
          <h1>ARtifacts</h1>
          <p>Interactive museum experiences with augmented reality and guided tours.</p>
          <a className="btn" href="#download">
            Download App
          </a>
        </section>

        <section className="content-block" id="about">
          <h2>Project Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec velit egestas,
            ullamcorper tellus nec, vehicula lorem.
          </p>
        </section>

        <section className="feature-grid">
          {featureCards.map((card) => (
            <div key={card.title} className="feature-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </section>

        <section className="footer-links" id="contact">
          {footerGroups.map((group) => (
            <div key={group.heading}>
              <h4>{group.heading}</h4>
              <p>
                {group.items.map((item, index) => (
                  <span key={`${group.heading}-${item}`}>
                    {index > 0 && <br />}
                    {item}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
