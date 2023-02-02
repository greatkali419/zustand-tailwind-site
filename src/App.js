import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AddJobs from "./components/AddJobs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {

 

  return (
    <div className="bg-white w-full min-h-full dark:bg-black scroll-mt-80"  id="hero">
      <Header />
      <Hero />
      <Main />
      <AddJobs />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
