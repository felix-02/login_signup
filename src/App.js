import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Layout>
      <Routes>
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="signup" element={<SignUp />} />

        {isLoggedIn && (
          <Route
            path="login-success"
            element={<Success setIsLoggedIn={setIsLoggedIn} />}
          />
        )}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Layout>
  );
};

export default App;
