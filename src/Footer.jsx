const footerGroups = [
  { heading: 'Project', items: ['About', 'Download'] },
  { heading: 'Policy', items: ['Terms', 'Privacy'] },
  { heading: 'Group', items: ['National University - Manila', 'Members'] },
  { heading: 'Contact', items: ['1lessthan3girls@gmail.com'] },
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
                    <span key={`${group.heading}-${item}`}>
                      {index > 0 && <br />}
                      {item === 'Download' ? (
                        <button type="button" className="footer-download" onClick={onDownload}>
                          {item}
                        </button>
                      ) : item}
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
