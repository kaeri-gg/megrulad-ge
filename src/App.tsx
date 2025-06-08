import NavBar from "./components/header/NavBar.tsx";
import PageTitle from "./components/header/PageTitle..tsx";
import SubTitle from "./components/header/SubTitle.tsx";
import PageDescription from "./components/header/PageDescription.tsx";

function App() {
  return (
    <div className="main-body">
      <NavBar />
      <PageTitle />
      <SubTitle />
      <PageDescription />
    </div>
  );
}

export default App;
