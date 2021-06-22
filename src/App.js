import "./styles.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GitHubIcon from "@material-ui/icons/GitHub";
import HeadsetIcon from "@material-ui/icons/Headset";
import MenuAppBar from "./TopMenu";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Reactcard from "./Reactcard";
import Materialcard from "./Materialcard";
import Playlist from "./Playlist";
import Profile from "./Profile";
//import materialcard from "./materialcard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MenuAppBar />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Profile />
        </Grid>
        <Grid item xs={6} sm={6} center>
          <Playlist />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Reactcard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Materialcard />
        </Grid>
        <Grid item xs={12}>
          <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.paper}
          >
            <BottomNavigationAction
              label="llacy730"
              href="https://github.com/llacy730"
              target="_blank"
              value="github"
              icon={<GitHubIcon />}
            />
            <BottomNavigationAction
              label="llacy730@gmail.com"
              target="_blank"
              href="mailto: llacy730@gmail.com"
              value="email"
              icon={<EmailIcon />}
            />
            <BottomNavigationAction
              label="Houston,TX"
              value="HoustonTX"
              icon={<LocationOnIcon />}
            />
            <BottomNavigationAction
              href="https://open.spotify.com/playlist/37i9dQZF1DX3Ogo9pFvBkY?si=_MOvkI-UTBKWtFpLqv60Ig"
              target="_blank"
              rel="noopener"
              label="Playlist"
              value="playlist"
              icon={<HeadsetIcon />}
            />
          </BottomNavigation>
        </Grid>
      </Grid>
    </div>
  );
}
