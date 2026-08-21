const footerGroups = [
  {
    heading: 'Project',
    items: [
      { label: 'About', subText: 'Learn more about ARtifacts.' },
      { label: 'Download' },
    ],
  },
  {
    heading: 'Group',
    items: [
      { label: 'National University - Manila', subText: 'Our academic partner.' },
      { label: 'Members', subText: 'Meet the project team.' },
    ],
  },
  {
    heading: 'Contact',
    items: [
      { label: '1lessthan3girls@gmail.com', subText: 'Send us a message.' },
    ],
  },
];

function Footer({ backgroundImage, onDownload }) {
  return (
    <section className="footer-reveal">
      <div className="footer-reveal-track">
        <div className="footer-reveal-sticky" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="footer-links" id="contact">
            {footerGroups.map((group) => (
              <div key={group.heading}>
                <h4>{group.heading}</h4>
                <p>
                  {group.items.map((item, index) => (
                    <span key={`${group.heading}-${item.label}`} className="footer-item">
                      {index > 0 && <br />}
                      {item.label === 'Download' ? (
                        <button type="button" className="footer-download" onClick={onDownload}>
                          {item.label}
                        </button>
                      ) : (
                        <span className="footer-item-content">
                          <span>{item.label}</span>
                          <small>{item.subText}</small>
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
