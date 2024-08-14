// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Container, Typography, Box } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box sx={{ display: " flex" }}>
      <Navbar />
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          YouTube Clone
        </Typography>
        {/* Add your components here */}
      </Container>
    </Box>
  );
}

export default App;
