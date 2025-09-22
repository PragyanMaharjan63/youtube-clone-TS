import Leftbar from "./components/leftbar";
import MainPrev from "./components/main";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className=" flex flex-col">
      <section className="fixed top-0 left-0 w-full h-12 z-50">
        <Navbar />
      </section>
      <section className="pt-12 flex ">
        <div className="w-70 h-screen overflow-y-auto overflow-x-hidden">
          <Leftbar />
        </div>
        <div className="flex-1">
          <MainPrev />
        </div>
      </section>
    </div>
  );
}

export default App;
