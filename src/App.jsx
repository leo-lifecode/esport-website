import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./pages/footer";
import About from "./pages/about";
import Tournament from "./pages/tournament";
import Ourshop from "./pages/ourshop";
import LastestNew from "./pages/lastestNew";
import Contact from "./pages/contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full">
        <Home />
        <About />
        <Tournament />
        <Contact />
        <Ourshop />
        <LastestNew />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
