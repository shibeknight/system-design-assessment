import { Box, Typography, Avatar } from "@mui/material";

interface VideoThumbnailProps {
  thumbnail_url: string;
  title: string;
  uploaded_by: string;
  userProfilePic: string;
  views: number;
  upload_date: string;
  darkMode: boolean;
}

const Videothumbnail: React.FC<VideoThumbnailProps> = ({ thumbnail_url, title, uploaded_by, userProfilePic, views, upload_date, darkMode }) => {
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
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: darkMode ? "#fff" : "#000", }}>
            {title}
          </Typography>
          <Typography variant="body2" color={darkMode ? "text.secondary" : "text.primary"}>
            {uploaded_by}
          </Typography>
          <Typography variant="body2" color={darkMode ? "text.secondary" : "text.primary"}>
            {views.toLocaleString()} views • {upload_date}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Videothumbnail;
