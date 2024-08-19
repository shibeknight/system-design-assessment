import { Box, Drawer, List, ListItemIcon, ListItemButton, ListItemText, Divider, Typography } from "@mui/material";
import {
  Home,
  Subscriptions,
  MusicNote,
  Whatshot,
  AccountCircle,
  VideogameAsset,
  History,
  ThumbUp,
  PlaylistPlay,
  PlayArrow,
  AccessTime,
} from "@mui/icons-material";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, darkMode }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        width: isOpen ? 240 : 0,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          top: "64px",
          backgroundColor: darkMode ? "#121212" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
          display: isOpen ? "block" : "none",
        },
      }}
    >
      <Box sx={{ overflowY: "auto" }}>
        {/* Navigation */}
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Home sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Whatshot sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
            </ListItemIcon>
            <ListItemText primary="Shorts" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Subscriptions sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
            </ListItemIcon>
            <ListItemText primary="Subscriptions" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <MusicNote sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
            </ListItemIcon>
            <ListItemText primary="Music" />
          </ListItemButton>
        </List>

        <Divider sx={{ backgroundColor: darkMode ? "#333" : "#e0e0e0" }} />

        {/* Second Section: User */}
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="div">
            You
          </Typography>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
              </ListItemIcon>
              <ListItemText primary="You" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <History sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PlaylistPlay sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
              </ListItemIcon>
              <ListItemText primary="Playlists" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PlayArrow sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
              </ListItemIcon>
              <ListItemText primary="My Videos" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AccessTime sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
              </ListItemIcon>
              <ListItemText primary="Watch later" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ThumbUp sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
              </ListItemIcon>
              <ListItemText primary="Liked videos" />
            </ListItemButton>
          </List>
        </Box>

        <Divider sx={{ backgroundColor: darkMode ? "#333" : "#e0e0e0" }}/>

        {/* Categories */}
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="div">
            Explore
          </Typography>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <Whatshot sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
              </ListItemIcon>
              <ListItemText primary="Trending" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <MusicNote sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
              </ListItemIcon>
              <ListItemText primary="Music" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <VideogameAsset sx={{ color: darkMode ? "#ffffff" : "#000000" }}/>
              </ListItemIcon>
              <ListItemText primary="Gaming" />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
