import NavBar from './components/NavBar.tsx';
import LanguageSwitcherHeader from './components/LanguageSwitcherHeader.tsx';
import HeroSection from './components/HeroSection.tsx';
import CommonWords from './components/CommonWords.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="main-body">
      <div className="content-container">
        <div className="navigation-container">
          <div className="new-container">
            <NavBar />
          </div>
        </div>
        <div className="body-container">
          <HeroSection />
          <LanguageSwitcherHeader />
          <CommonWords />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
