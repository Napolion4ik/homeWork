import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Link to="/">
              <Typography variant="h6" component="h6" color="inherit">
                CONTACS
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="contacts">
              <IconButton color="inherit">
                <AccountBoxIcon fontSize="large" />
              </IconButton>
            </Link>
            <Link to="contacts/create">
              <IconButton color="inherit">
                <AddIcCallIcon fontSize="large" />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <ThemeSwitch />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
