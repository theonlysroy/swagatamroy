import About from "./components/About";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 w-full min-h-screen flex justify-center dark:text-[#f7f7f7df] transition-colors duration-300">
      {/* portfolio wrapper div */}
      <div className="w-[600px]">
        {/* navbar */}
        <Navbar />
        {/* about section */}
        <About />
        {/* projects */}
        <Projects />
        {/* blogs */}
        <Blogs />
        {/* footer links */}
        <Footer />
      </div>
    </div>
  );
}
