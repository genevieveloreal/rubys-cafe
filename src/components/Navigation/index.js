import React from 'react';
import Typography from "@material-ui/core/Typography";
import { Call } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import { animateScroll as scroll } from "react-scroll";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    marginRight: "24px",
    cursor: "pointer",
  },
  navlink: {
    marginRight: "24px",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none"
  },
  icon: {
    verticalAlign: "middle"
  },
  mobiledrawer: {
    width: "200px",
    padding: "24px",
    height: "100%",
    "& > *": {
      margin: "24px 0"
    }
  },
  mobilebutton: {
    color: "white",
    [theme.breakpoints.up('lg')]: {
      display: "none"

    }
  },
  desktopnav: {
    display: "flex",
    [theme.breakpoints.down('md')]: {
      display: "none"
    }
  },
  drawer: {
    background: "rgba(25,25,25,1)",
  },
  closebutton: {
    position: "absolute",
    right: 0,
    color: "white",
    fontSize: "12px"
  }

}));

export default function Navigation() {

  const classes = useStyles();

  const [drawOpen, toggleDrawer] = React.useState(false);

  const scrollToTarget = (e) => {
    const scrolltarget = e.target.dataset.scrollto;
    e.persist();
    toggleDrawer(false);

    scroll.scrollTo(document.getElementById(scrolltarget).offsetTop - 25, {
      duration: 1000,
      offset: -200,
      smooth: true
    });

  };

  const navLinks = (
    <>
      <Typography variant="h5" data-scrollto="menu" onClick={event => scrollToTarget(event)}
                  className={classes.navlink}>Menu</Typography>
      <Typography variant="h5" data-scrollto="location" onClick={event => scrollToTarget(event)}
                  className={classes.navlink}>Location</Typography>
      <Typography className={classes.navlink} href="tel:+61242846890" component="a"><Call
        className={classes.icon}/> 4284 6890</Typography>
    </>
  );

  return (
    <>
      <div className={classes.desktopnav}>
        <div className={[classes.navlinks]}>
          {navLinks}
        </div>
      </div>
      <Button onClick={() => toggleDrawer(true)}
              className={[classes.mobilebutton]}><MenuIcon/></Button>
      <Drawer anchor={"right"} open={drawOpen} onClose={() => toggleDrawer(false)}
              classes={{paperAnchorRight: classes.drawer}}>
        <Button onClick={() => toggleDrawer(false)} className={classes.closebutton}><CloseIcon/> close</Button>
        <div className={classes.mobiledrawer}>
          {navLinks}
        </div>

      </Drawer>
    </>
  );
}