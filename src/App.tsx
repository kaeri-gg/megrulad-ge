import NavBar from './components/NavBar.tsx';
import LanguageSwitcherHeader from './components/LanguageSwitcherHeader.tsx';
import HeroSection from './components/HeroSection.tsx';
import CommonWords from './components/CommonWords.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="main-body">
      <div className="navigation-container">
        <NavBar />
      </div>
      <div className="content-container">
        <HeroSection />
        <LanguageSwitcherHeader />
        <CommonWords />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
