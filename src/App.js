import { useCallback, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Team } from "./pages/Team";
import { About } from "./pages/About";
import { Event } from "./pages/Event";
import { Contact } from "./pages/Contact";
import { EventDetail } from "./pages/EventDetail";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import PreLoader from "./components/pre-loader/pre-loader";
import ErrorPage from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  const { pathname } = useLocation();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [pathname, scrollToTop]);

  // Admin and Login pages have their own full-screen layout (no Navbar/Footer)
  const isAdminRoute = pathname === "/admin" || pathname === "/login";

  return (
    <>
      {!isAdminRoute && <PreLoader />}

      {isAdminRoute ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      ) : (
        <div className="w-screen bg-richblack-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/event" element={<Event />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
