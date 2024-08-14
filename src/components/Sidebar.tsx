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
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
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
          display: isOpen ? "block" : "none",
        },
      }}
    >
      <Box sx={{ overflowY: "auto" }}>
        {/* Navigation */}
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Whatshot />
            </ListItemIcon>
            <ListItemText primary="Shorts" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Subscriptions />
            </ListItemIcon>
            <ListItemText primary="Subscriptions" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <MusicNote />
            </ListItemIcon>
            <ListItemText primary="Music" />
          </ListItemButton>
        </List>

        <Divider />

        {/* Second Section: User */}
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="div">
            You
          </Typography>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="You" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PlaylistPlay />
              </ListItemIcon>
              <ListItemText primary="Playlists" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PlayArrow />
              </ListItemIcon>
              <ListItemText primary="My Videos" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AccessTime />
              </ListItemIcon>
              <ListItemText primary="Watch later" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ThumbUp />
              </ListItemIcon>
              <ListItemText primary="Liked videos" />
            </ListItemButton>
          </List>
        </Box>

        <Divider />

        {/* Categories */}
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="div">
            Explore
          </Typography>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <Whatshot />
              </ListItemIcon>
              <ListItemText primary="Trending" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <MusicNote />
              </ListItemIcon>
              <ListItemText primary="Music" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <VideogameAsset />
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
