import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">Developed by Samantha Rulapaugh</p>

      <p className="footer__year">{currentYear}</p>
    </footer>
  );
}

export default Footer;
