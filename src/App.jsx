import "./App.css";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer/Footer2";
import Navbar from "./components/Navbar/Navbar";
import Footer3 from "./components/Footer/footer3";
import Footer4 from "./components/Footer/Footer4";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Reusable-UI
      </h1>
      <Footer></Footer>
      <h1>Another footer section</h1>
      <Footer2></Footer2>
      <h6>Another footer section part</h6>
      <Footer3></Footer3>
      <h6>Another footer section part</h6>
      <Footer4></Footer4>

    </>
  );
}

export default App;
