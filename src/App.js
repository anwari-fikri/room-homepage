import Content from "./components/Content";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="md:h-screen">
      <Navigation />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
