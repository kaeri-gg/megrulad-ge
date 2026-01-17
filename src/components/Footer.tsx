import HeartIcon from '@public/icons/heart-icon.svg?url';

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="developers">
        <span>Copyright @ 2026. All rights reserved.</span>
        <img src={HeartIcon} className="footer-heart" alt="heart icon" />
        <span>Developed by Harry Kodua & Kathleen Povadora</span>
      </div>
    </div>
  );
};

export default Footer;
