import { AppBar, Toolbar, IconButton, Typography, InputBase, Box, Avatar, Badge, Switch } from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, VideoCall as VideoCallIcon, Notifications as NotificationsIcon } from "@mui/icons-material";

interface NavbarProps {
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, toggleDarkMode, darkMode }) => {
  return (
    <AppBar position="fixed" color={darkMode ? "primary" : "default"}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Burger Icon and Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ ml: 2 }}>
            YouTube the 2nd
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            position: "relative",
            borderRadius: "4px",
            backgroundColor: darkMode ? "#333" : "#f1f1f1",
            "&:hover": {
              backgroundColor: darkMode ? "#444" : "#e0e0e0",
            },
            width: "100%",
            maxWidth: "600px",
            display: "flex",
            alignItems: "center",
            mx: "auto",
          }}
        >
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{
              padding: "8px 8px 8px 16px",
              width: "100%",
              color: darkMode ? "#fff" : "#000",
            }}
          />
          <IconButton type="submit" aria-label="search" sx={{ color: darkMode ? "#fff" : "#000" }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* User */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Avatar alt="Profile Picture" src="https://avatars.githubusercontent.com/u/38518156?v=4" />
          </IconButton>
          <Box sx={{ ml: 2 }}>
            <Switch checked={darkMode} onChange={toggleDarkMode} inputProps={{ "aria-label": "dark mode toggle" }} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
