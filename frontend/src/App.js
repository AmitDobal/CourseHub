import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Courses from "./pages/Courses";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box
        minHeight="90vh" // Make the container at least the height of the viewport
        display="flex"
        flexDirection="column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/dashboard" element={<Dashboard  />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
