import Navbar from "./components/hero_section/Navbar";
import Hero_sec from "./components/hero_section/Hero_sec";
import Category from "./components/category/Category";
import Popular from "./components/popular/Popular";
import Payments from "./components/paymentMethods/Payments";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
       <Navbar/>
        <div className="hero_section">
          <Hero_sec/>
        </div>
        <Category/>
        <Popular/>
        <Payments/>
        <Testimonials />
    </div>
  );
}

export default App;
