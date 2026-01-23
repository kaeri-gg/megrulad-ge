import HeartIcon from '@public/icons/heart-icon.svg?url';

const Footer = () => {
  return (
    <div className="new-container">
      <div className="footer-main-container">
        <div className="others">
          <span>Copyright @ 2026. All rights reserved.</span>
        </div>
        <div className="developers">
          <span> Developed by Harry Kodua </span>
          <img src={HeartIcon} className="footer-heart" alt="heart icon" />
          <span>Kathleen Povadora </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
