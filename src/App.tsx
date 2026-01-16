import NavBar from './components/header/NavBar.tsx';
import LanguageSwitcherHeader from './components/language-switcher/LanguageSwitcherHeader.tsx';
import HeroSection from './components/hero/HeroSection.tsx';
import CommonWords from './components/common-words/CommonWords.tsx';

function App() {
  return (
    <div className="main-body">
      <NavBar />
      <HeroSection />
      <LanguageSwitcherHeader />
      <CommonWords />
    </div>
  );
}

export default App;
