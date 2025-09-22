import Leftbar from "./components/leftbar";
import MainPrev from "./components/main";
import Navbar from "./components/navbar";
import TopSections from "./components/topsections";

function App() {
  return (
    <div className=" flex flex-col">
      <section className="fixed top-0 left-0 w-full h-12 z-50">
        <Navbar />
      </section>

      <section className="pt-12 flex ">
        <div className="w-[13vw] h-screen overflow-y-auto overflow-x-hidden fixed">
          <Leftbar />
        </div>
        <div className="w-[87vw] h-screen overflow-y-auto fixed right-0">
          <div className="m-3 fixed">
            <TopSections />
          </div>
          <MainPrev />
        </div>
      </section>
    </div>
  );
}

export default App;
