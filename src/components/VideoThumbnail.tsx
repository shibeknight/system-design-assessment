import { Box, Typography, Avatar } from "@mui/material";

interface VideoThumbnailProps {
  thumbnailUrl: string;
  title: string;
  channelName: string;
  channelIconUrl: string;
  views: number;
  uploadDate: string;
}

const Videothumbnail: React.FC<VideoThumbnailProps> = ({ thumbnailUrl, title, channelName, channelIconUrl, views, uploadDate }) => {
  return (
    <Box sx={{ width: 300, cursor: "pointer", marginBottom: 3 }}>
      <Box component="img" src={thumbnailUrl} alt={title} sx={{ width: "100%", borderRadius: "8px" }} />
      <Box sx={{ display: "flex", marginTop: 1.5 }}>
        <Avatar src={channelIconUrl} alt={channelName} sx={{ marginRight: 2 }} />
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {channelName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {views.toLocaleString()} views • {uploadDate}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Videothumbnail;
