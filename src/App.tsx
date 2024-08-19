import { useState, useEffect } from "react";
import { Box, Grid, Skeleton, Button } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Videothumbnail from "./components/VideoThumbnail";
import { Video, VideoWithProfile } from "./types";
import "./App.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<VideoWithProfile[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute("data-theme", darkMode ? "light" : "dark");
  };

  async function fetchVideos() {
    try {
      const response = await fetch("https://database-service-nw0o.onrender.com/metadata/videos");
      const data: Video[] = await response.json();
      console.log("data?", data);
      const finalData: VideoWithProfile[] = data.map((video) => ({
        ...video,
        userProfilePic: "https://via.placeholder.com/50/FFCCCC/808080?text=CM",
        thumbnail_url: "https://via.placeholder.com/300x180?text=Thumbnail",
        views: 1500,
      }));

      setVideos(finalData);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data ", error);
      setLoading(false);
    }
  }

  const handleFavorite = (video_id: string) => {
    const updatedFavorites = new Set(favorites);
    if (updatedFavorites.has(video_id)) {
      updatedFavorites.delete(video_id);
    } else {
      updatedFavorites.add(video_id);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(Array.from(updatedFavorites)));
  };

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(new Set(JSON.parse(savedFavorites)));
    }
    fetchVideos();
  }, []);

  return (
    <Box sx={{ display: " flex" }}>
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} darkMode={darkMode} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          ml: isSidebarOpen ? "24px" : "0",
          mt: "64px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Button onClick={handleShowFavorites} sx={{ mb: 2 }}>
          {showFavorites ? "Show All" : "Show Favorites"}
        </Button>
        {/* Main stuff goes here*/}
        <Grid container spacing={3} justifyContent={"space-around"}>
          {loading
            ? Array.from(new Array(15)).map((_, index) => (
                <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                  <Skeleton variant="rectangular" width={300} height={180} />
                  <Box sx={{ display: "flex", marginTop: 1.5 }}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Box sx={{ ml: 2 }}>
                      <Skeleton width="80%" />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                </Grid>
              ))
            : videos
                .filter((video) => !showFavorites || favorites.has(video.video_id))
                .map((video, index) => (
                  <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                    <Videothumbnail {...video} darkMode={darkMode} onFavorite={handleFavorite} isFavorite={favorites.has(video.video_id)} />
                  </Grid>
                ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
