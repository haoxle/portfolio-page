import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Bio from "./pages/Bio/Bio";
import Logo from "./components/Logo/Logo";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Logo />
            <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Logo />
            <Bio />
          </>
        }
      />
    </Routes>
  );
}

export default App;
