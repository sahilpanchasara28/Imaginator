import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./page";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        {isAuthenticated ? (
          <>
            <Link
              to="/create-post"
              className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
              style={{ marginLeft: "auto", marginRight: "20px" }}
            >
              Create
            </Link>
            <button
              className="font-inter font-medium bg-[#f54131] text-white px-4 py-2 rounded-md"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          </>
        ) : (
          <button
            className="font-inter font-medium bg-[#5df53b] text-white px-4 py-2 rounded-md"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        ) : (
          <h1
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "10px",
            }}
          >
            Kindly login to access content
          </h1>
        )}
      </main>
    </BrowserRouter>
  );
};

export default App;
