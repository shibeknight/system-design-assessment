import { Box, Typography, Avatar } from "@mui/material";

interface VideoThumbnailProps {
  thumbnail_url: string;
  title: string;
  uploaded_by: string;
  userProfilePic: string;
  views: number;
  upload_date: string;
}

const Videothumbnail: React.FC<VideoThumbnailProps> = ({ thumbnail_url, title, uploaded_by, userProfilePic, views, upload_date }) => {
  return (
    <Box sx={{ width: 300, cursor: "pointer", marginBottom: 3 }}>
      <Box component="img" src={thumbnail_url} alt={title} sx={{ width: "100%", borderRadius: "8px" }} />
      <Box sx={{ display: "flex", marginTop: 1.5 }}>
        <Avatar src={userProfilePic} alt={uploaded_by} sx={{ marginRight: 2 }} />
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {uploaded_by}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {views.toLocaleString()} views • {upload_date}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Videothumbnail;
