import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <h1 className="contact-greeting">Hello.</h1>
      <p className="contact-message">Get in touch! </p>
      <p className="contact-message">
        Email: <span className="span">Hao-Le@live.co.uk</span>
      </p>
      <div className="contact">
        <p>Connect with me!</p>{" "}
        <div className="contact__message">
          <a
            href="https://www.instagram.com/haoxle/"
            target="_blank"
            rel="noreferrer"
            className="contact__message"
          >
            <span className="span">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hao-le-376669107/"
            target="_blank"
            rel="noreferrer"
            className="contact__message"
          >
            <span className="span">LinkedIn</span>
          </a>
          <a
            href="https://github.com/haoxle"
            target="_blank"
            rel="noreferrer"
            className="contact__message"
          >
            <span className="span">GitHub</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
