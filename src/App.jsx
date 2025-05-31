import "./App.css";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer/Footer2";
import Navbar from "./components/Navbar/Navbar";
import Footer3 from "./components/Footer/footer3";
import Footer4 from "./components/Footer/Footer4";
import Navbar2 from "./components/Navbar/Navbar2";
import Card1 from "./components/Card/Card1";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <h1>Another Navbar section</h1>
     
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Reusable-UI
      </h1>
      <Navbar2></Navbar2>
     <HeroSection></HeroSection> 
     <HeroSection2></HeroSection2>
      <h1>Footer Section</h1>

      <Footer></Footer>
      <h1>Another footer section</h1>
      <Footer2></Footer2>
      <h6>Another footer section part</h6>
      <Footer3></Footer3>
      <h6>Another footer section part</h6>
      <Footer4></Footer4>
      <Card1></Card1>

    </>
  );
}

export default App;
