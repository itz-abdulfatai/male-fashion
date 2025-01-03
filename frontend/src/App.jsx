import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import NotFound from "./pages/NotFound.jsx";
// import Header from "./components/global/Header.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import DashLayout from "./layouts/DashLayout.jsx";
import DashHome from "./pages/DashHome.jsx";
import Shop from "./pages/Shop.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    document.documentElement.classList.add("no-transition");
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsChecked(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsChecked(false);
    }

    if (!theme) {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDarkScheme) {
        setIsChecked(true)
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    }

    setTimeout(() => {
      document.documentElement.classList.remove("no-transition");
    }, 0);
  }, []);

  return (
    <>

    <Routes>
     {/* main layout */}
     <Route element={<MainLayout/>}>
     < Route path="/" element={<Home />}/>
     < Route path="/shop" element={<Shop />}/>
     < Route path="/blog" element={<Blog />}/>
     < Route path="/contact" element={<Contact />}/>
     
     

     </Route>

     {/* dash layout */}

     <Route element={<DashLayout/>}>
     <Route path="/dashboard" element={<DashHome/>}/>

     </Route>



     {/* routes without a layout */}
     <Route path="*" element={<NotFound />} />
    </Routes>






    {/* theme toggle button */}
      <label htmlFor="theme" className="theme">
        <span className="theme__toggle-wrap">
          <input
            id="theme"
            className="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
            value="dark"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="theme__icon">
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
          </span>
        </span>
      </label>
    </>
  );
}

export default App;
