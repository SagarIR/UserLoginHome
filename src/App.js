import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./component/main";
import Login from "./component/Login/userLogin";
import Home from "./component/Home/home";

const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  return user !== null && user !== undefined;
};

const ProtectedRoute = ({ path, element }) => {
  return isAuthenticated() ? element : <Navigate to="/" replace={true} />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="home" element={<ProtectedRoute element={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
