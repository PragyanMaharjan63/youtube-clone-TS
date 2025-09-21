import Leftbar from "./components/leftbar";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-black text-white flex flex-col">
      <section className="fixed top-0 left-0 w-full h-12 z-50">
        <Navbar />
      </section>
      <section className="pt-12 flex-1 flex">
        <Leftbar />
      </section>
    </div>
  );
}

export default App;
