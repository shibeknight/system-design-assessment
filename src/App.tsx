// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Videothumbnail from "./components/Videothumbnail";

const mockData = [
  {
    thumbnailUrl: "https://via.placeholder.com/300x180",
    title: "Video Title 1",
    channelName: "Channel 1",
    channelIconUrl: "https://via.placeholder.com/50",
    views: 12000,
    uploadDate: "1 week ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/300x180",
    title: "Video Title 2",
    channelName: "Channel 2",
    channelIconUrl: "https://via.placeholder.com/50",
    views: 15000,
    uploadDate: "2 weeks ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/300x180",
    title: "Video Title 3",
    channelName: "Channel 3",
    channelIconUrl: "https://via.placeholder.com/50",
    views: 30000,
    uploadDate: "3 days ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/300x180",
    title: "Video Title 1",
    channelName: "Channel 1",
    channelIconUrl: "https://via.placeholder.com/50",
    views: 12000,
    uploadDate: "1 week ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/300x180",
    title: "Video Title 2",
    channelName: "Channel 2",
    channelIconUrl: "https://via.placeholder.com/50",
    views: 15000,
    uploadDate: "2 weeks ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/300x180",
    title: "Video Title 3",
    channelName: "Channel 3",
    channelIconUrl: "https://via.placeholder.com/50",
    views: 30000,
    uploadDate: "3 days ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/300x180",
    title: "Video Title 1",
    channelName: "Channel 1",
    channelIconUrl: "https://via.placeholder.com/50",
    views: 12000,
    uploadDate: "1 week ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/300x180",
    title: "Video Title 2",
    channelName: "Channel 2",
    channelIconUrl: "https://via.placeholder.com/50",
    views: 15000,
    uploadDate: "2 weeks ago",
  },
  {
    thumbnailUrl: "https://via.placeholder.com/300x180",
    title: "Video Title 3",
    channelName: "Channel 3",
    channelIconUrl: "https://via.placeholder.com/50",
    views: 30000,
    uploadDate: "3 days ago",
  },
];

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
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
          {mockData.map((video, index) => (
            <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
              <Videothumbnail {...video} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
