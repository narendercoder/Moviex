import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { BottomNavigation } from "@material-ui/core";
import { BottomNavigationAction } from "@material-ui/core";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    background: "#1c1f29",
    zIndex: 100,
  },
  label: {
    color:'white',
    '&:hover':{
     color: "gold"
  },
  '&.Mui-selected': {
    color: 'gold',
  }
  }
  
});
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useNavigate();

  useEffect(() => {
    if (value === 0) history("/");
    else if (value === 1) history("/movies");
    else if (value === 2) history("/series");
    else if (value === 3) history("/search");
  }, [value, history]);

  return (
    <Box sx={{ width: 500 }} >
      <BottomNavigation 
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
        className={classes.label}
         
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
        className={classes.label}
         
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
        className={classes.label}
         
          label="TV Series"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
        className={classes.label}
         
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
