import "./App.css";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <div className="h-screen text-neutral-50 bg-slate-900">
      <Navbar />
      <div className="my-24">
        <h1 className="text-8xl">Google</h1>
        <form className="flex justify-center h-8 mt-6">
          <span className="text-slate-500 bg-white rounded-l-full pl-2 material-symbols-outlined">
            search
          </span>
          <input
            className="h-6 pt-4 pb-4 w-2/6 outline-none text-slate-500"
            type="text"
            id="voice-search"
            required
          ></input>
          <div className="text-slate-500 bg-white rounded-r-full flex gap-x-2 pr-2">
            <span className="material-symbols-outlined">close</span>
            <span className="text-2xl">|</span>
            <span className="material-symbols-outlined">keyboard</span>
            <span className="material-symbols-outlined">keyboard_voice</span>
            <span className="material-symbols-outlined">photo_camera</span>
          </div>
        </form>
        <div className="flex gap-x-4 justify-center mt-6">
          <div className="pt-2 pr-4 pb-2 pl-4 bg-slate-500 rounded-md">
            Google Search
          </div>
          <div className="pt-2 pr-4 pb-2 pl-4 bg-slate-500 rounded-md">
            I am Feeling Lucky
          </div>
        </div>
        <div className="mt-4">Google offered in: বাংলা</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
