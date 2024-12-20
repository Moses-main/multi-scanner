import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Player } from "@lottiefiles/react-lottie-player"; // Lottie player
import "@lottiefiles/lottie-player";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WaitlistPage from "./pages/WaitlistPage";
// import globeAnimation from "./assets/globe.json"; // Path to your downloaded Lottie file

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-navy-900 to-gray-800 text-white">
        <header className="flex justify-between w-full px-10 py-5 items-center">
          <h1 className="text-2xl font-bold">Multi Scan</h1>
          <nav>
            <Link to="/login" className="mx-3 hover:text-blue-400 transition">
              Login
            </Link>
            <Link to="/signup" className="mx-3 hover:text-blue-400 transition">
              Signup
            </Link>
            <Link
              to="/waitlist"
              className="mx-3 hover:text-blue-400 transition"
            >
              Waitlist
            </Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import { useTelegramWebApp } from "@telegram-web-app/react";

// export const App = () => {
//   const telegram = useTelegramWebApp();
// };
