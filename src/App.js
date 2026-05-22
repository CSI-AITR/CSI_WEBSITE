import { useCallback, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import PreLoader from "./components/pre-loader/pre-loader";
import ProtectedRoute from "./components/common/ProtectedRoute";
import PageTransition from "./components/common/PageTransition";
import SmoothScroll from "./components/common/SmoothScroll";

const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const Team = lazy(() => import("./pages/Team").then(m => ({ default: m.Team })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Event = lazy(() => import("./pages/Event").then(m => ({ default: m.Event })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const EventDetail = lazy(() => import("./pages/EventDetail").then(m => ({ default: m.EventDetail })));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Login = lazy(() => import("./pages/Login"));
const AdminPage = lazy(() => import("./pages/AdminPage"));


function App() {
  const location = useLocation();
  const { pathname } = location;

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
      <SmoothScroll />
      {!isAdminRoute && <PreLoader />}

      {isAdminRoute ? (
        <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center text-white bg-richblack-900">Loading...</div>}>
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
        </Suspense>
      ) : (
        <div className="w-screen bg-richblack-900 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center text-white bg-richblack-900">Loading...</div>}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                  <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
                  <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                  <Route path="/event" element={<PageTransition><Event /></PageTransition>} />
                  <Route path="/contactUs" element={<PageTransition><Contact /></PageTransition>} />
                  <Route path="/event/:id" element={<PageTransition><EventDetail /></PageTransition>} />
                  <Route path="*" element={<PageTransition><ErrorPage /></PageTransition>} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
