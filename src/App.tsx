// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState, useEffect } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Videothumbnail from "./components/VideoThumbnail";
import mockData from "./data/mockData.json";

interface Video {
  thumbnailUrl: string;
  title: string;
  channelName: string;
  channelIconUrl: string;
  views: number;
  uploadDate: string;
}

const mockVideos = mockData as Video[]

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<Video[]>([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setVideos(mockVideos);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box sx={{ display: " flex" }}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
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
        {/* Main stuff goes here*/}
        <Grid container spacing={3} justifyContent={"space-around"}>
          {loading
            ? Array.from(new Array(15)).map((_, index) => (
                <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={12}>
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
            : videos.map((video, index) => (
                <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={12}>
                  <Videothumbnail {...video} />
                </Grid>
              ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
