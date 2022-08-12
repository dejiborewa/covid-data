import Header from "./components/header";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <Header />
      <div className="w-[95%] mx-auto">
        <Home />
      </div>
    </>
  );
}

export default App;
