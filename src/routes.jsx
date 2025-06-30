import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

// পেজ কম্পোনেন্টগুলো
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import About from "./pages/About";
import Contact from "./pages/Contact";

import BidBasketDetails from "./pages/BidBasketDetails"; 
import FreshTrackrDetails from "./pages/FreshTrackrDetails";
import MunchMoodDetails from "./pages/MunchMoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,          
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "education", element: <Education /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      /* -------- individual project detail routes -------- */
      { path: "project/bidbasket", element: <BidBasketDetails /> },
      { path: "project/freshtrackr", element: <FreshTrackrDetails /> },
      { path: "project/munchmood", element: <MunchMoodDetails /> },


      
    ],
  },
]);

export default router;
