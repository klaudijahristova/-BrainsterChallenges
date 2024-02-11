import Contact from "./contact";

const Footer = () => {
  let socialMediaIcons: string[] = [
    "fa-facebook-f",
    "fa-instagram",
    "fa-twitter",
    "fa-linkedin-in",
  ];
  let eventInfos: string[] = [
    "Event Now",
    "Event Info",
    "Race Pack",
    "Result",
    "FAQs",
    "Am I Registered?",
  ];
  let registrations: string[] = [
    "Volunteers",
    "Gallery",
    "Press",
    "Results",
    "Privacy Policy",
    "Service Plus",
    "Contacts",
  ];
  let shedules: string[] = [
    "Gallery",
    "About",
    "Videos",
    "Results",
    "FAQs",
    "Results",
    "Volunteers",
  ];
  return (
    <footer className="container-fluid p-0">
      <div className="row footer-wrapper">
        <div className="col-3">
          <h5>Social Share</h5>
          <ul className="list-unstyled d-flex">
            {socialMediaIcons.map((icon) => (
              <a
                href="#"
                key={icon}
                className="text-decoration-none text-black"
              >
                <li className="hover">
                  <i className={`fab ${icon} text-center`}></i>
                </li>
              </a>
            ))}
          </ul>
        </div>

        <Contact title="Event Info" array={eventInfos}/>
        <Contact title="Registration" array={registrations}/>
        <Contact title="Schedule" array={shedules}/>
      </div>
      
    </footer>
  );
};

export default Footer;
