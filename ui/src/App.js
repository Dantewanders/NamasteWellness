import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Layout from "./layouts";
import ThemeContextProvider from "./context/themeContext";
import Login from "./views/Login";
import Logout from "./views/Logout";
import RegisterForm from "./views/Register";
import UserProfile from "./views/UserProfile";
import MyWellness from "./views/MyWellness";
import Settings from "./views/Settings";
import Resources from "./views/Resources";
import MyMood from "./views/MyMood";
import MySleep from "./views/MySleep";
import MyThoughts from "./views/MyThoughts";
import MyJournals from "./views/MyJournals";

function App() {
  return (
    <div className="App">
      {/* <div 
     className="background-image"
     style={{ backgroundImage: namaste_BG }}
     >
     </div> */}
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ThemeContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/user/:username" element={<UserProfile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user/logout" element={<Logout />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/MyWellness" element={<MyWellness />} />
              <Route path="/MyMood" element={<MyMood />} />
              <Route path="/MySleep" element={<MySleep />} />
              <Route path="/MyThoughts" element={<MyThoughts />} />
              <Route path="/user/settings" element={<Settings />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/MyJournals" element={<MyJournals />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeContextProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
