import NavBar from "./components/header/NavBar.tsx";
import PageTitle from "./components/header/PageTitle..tsx";
import SubTitle from "./components/header/SubTitle.tsx";
import PageDescription from "./components/header/PageDescription.tsx";
import SectionTitle from "./components/SectionTitle.tsx";

function App() {
  return (
    <div className="main-body">
      <NavBar />
      <PageTitle />
      <SubTitle />
      <PageDescription />
      <SectionTitle />
    </div>
  );
}

export default App;
