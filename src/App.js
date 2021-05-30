import React from "react";
import "./App.css";
import Feed from "./Feed";
import Login from "./Login";
import Sidebar from "./Sidebar";
import UserProvider from "./providers/UserProvider";
function App() {
  return (
    <UserProvider>
      <div className="app">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* login */}
        <Login />
      </div>
    </UserProvider>
  );
}

export default App;
