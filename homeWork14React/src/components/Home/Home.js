import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} mt="50px">
      <Typography variant="h1" component="h2">
        Привіт
      </Typography>
    </Box>
  );
}

export default Home;
