import { AppBar, Toolbar, IconButton, Typography, InputBase, Box, Avatar, Badge } from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, VideoCall as VideoCallIcon, Notifications as NotificationsIcon } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        {/* Sidebar button */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          YouTube DOS
        </Typography>

        {/* Searchbar */}
        <Box
          sx={{
            position: "relative",
            borderRadius: "4px",
            backgroundColor: "#f1f1f1",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
            marginRight: "16px",
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            alignItems: "center",
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
            <Avatar alt="Profile Picture" src="https://via.placeholder.com/40" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
