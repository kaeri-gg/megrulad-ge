import NavBar from './components/header/NavBar.tsx';
import LanguageSwitcherHeader from './components/language-switcher/LanguageSwitcherHeader.tsx';
import HeroSection from './components/hero/HeroSection.tsx';

function App() {
  return (
    <div className="main-body">
      <NavBar />
      <HeroSection />
      <LanguageSwitcherHeader />
    </div>
  );
}

export default App;
