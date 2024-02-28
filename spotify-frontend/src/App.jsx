import "./App.css";
import SearchPage from "./routes/SearchPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import LibraryComponent from "./routes/Library";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSongComponent from "./routes/UploadSong";
import SinglePlaylistView from "./routes/SinglePlaylistView";
import MyMusic from "./routes/MyMusic";
import { useCookies } from "react-cookie";
import songContext from "./contexts/songContext";
import { useState } from "react";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  return (
    <>
      <div className="w-screen h-screen  font-poppins overflow-auto">
        <BrowserRouter>
          {cookie.token ? (
            <songContext.Provider
              value={{
                currentSong,
                setCurrentSong,
                soundPlayed,
                setSoundPlayed,
                isPaused,
                setIsPaused,
              }}
            >
              <Routes>
                <Route path="/" element={<LoggedInHomeComponent />} />
                <Route path="/uploadSong" element={<UploadSongComponent />} />
                <Route path="/myMusic" element={<MyMusic />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/library" element={<LibraryComponent />} />
                <Route
                  path="/playlist/:playlistId"
                  element={<SinglePlaylistView />}
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </songContext.Provider>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/signup" element={<SignupComponent />} />
              <Route path="/" element={<HomeComponent />} />
              <Route path="*" element={<Navigate to="/signup" />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
