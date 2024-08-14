import { AppBar, Toolbar, IconButton, Typography, InputBase, Box, Avatar, Badge } from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, VideoCall as VideoCallIcon, Notifications as NotificationsIcon } from "@mui/icons-material";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <AppBar position="fixed" color="default">
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
            backgroundColor: "#f1f1f1",
            "&:hover": {
              backgroundColor: "#e0e0e0",
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
            }}
          />
          <IconButton type="submit" aria-label="search">
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
