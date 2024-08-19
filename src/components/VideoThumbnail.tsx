import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface VideoThumbnailProps {
  thumbnail_url: string;
  title: string;
  uploaded_by: string;
  userProfilePic: string;
  views: number;
  upload_date: string;
  darkMode: boolean;
  video_id: string;
  onFavorite: (video_id: string) => void;
  isFavorite: boolean;
}

const Videothumbnail: React.FC<VideoThumbnailProps> = ({
  thumbnail_url,
  title,
  uploaded_by,
  userProfilePic,
  views,
  upload_date,
  darkMode,
  video_id,
  onFavorite,
  isFavorite,
}) => {
  return (
    <Box
      sx={{
        width: 300,
        cursor: "pointer",
        marginBottom: 3,
        backgroundColor: darkMode ? "#333" : "#fff",
        borderRadius: "8px",
        boxShadow: darkMode ? "0 4px 8px rgba(0,0,0,0.5)" : "0 4px 8px rgba(0,0,0,0.1)",
        transition: "background-color 0.3s, box-shadow 0.3s",
      }}
    >
      <Box component="img" src={thumbnail_url} alt={title} sx={{ width: "100%", borderRadius: "8px" }} />
      <Box sx={{ display: "flex", marginTop: 1.5 }}>
        <Avatar src={userProfilePic} alt={uploaded_by} sx={{ marginRight: 2 }} />
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: darkMode ? "#fff" : "#000" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: darkMode ? "#fff" : "#000" }}>
            {uploaded_by}
          </Typography>
          <Typography variant="body2" sx={{ color: darkMode ? "#fff" : "#000" }}>
            {views.toLocaleString()} views • {upload_date}
          </Typography>
          <IconButton onClick={() => onFavorite(video_id)} sx={{ marginLeft: "auto" }}>
            {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Videothumbnail;
