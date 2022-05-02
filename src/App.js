import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Users } from "./pages/Users";

import { Products } from "./pages/Products";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/account" element={<Account />}></Route>
    </Routes>
  );
};

export default App;
