import Home from "./assets/pages/home/Home.tsx";
import Nav from "./components/reusable/Nav.tsx";

function App() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
