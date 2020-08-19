import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import menu from "assets/menu.js";
import MenuItem from "components/MenuItem";
import { Call } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    marginTop: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    borderBottom: "1px solid #ccc",
    paddingBottom: "24px"
  },
  heading: {
    textAlign: "center",
    marginBottom: "34px"
  },
  subheading: {
    borderBottom: "1px solid #ccc",
    paddingBottom: "4px",
    marginBottom: "4px",
    width: "85%"
  },
  buttonContainer: {
    margin: "16px auto",
    display: "flex",
    justifyContent: "center"
  }
});

export default function MenuContainer() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.heading} >Takeaway Menu</Typography>

      <Grid container spacing={3}>

        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={classes.subheading}>All Day</Typography>
          <Typography variant="body1">Available all day</Typography>

          { menu.allday.map((item, key) =>
            <MenuItem key={key} {...item} />
          )}
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={classes.subheading}>Breakfast</Typography>
          <Typography variant="body1">7am - 11:30am</Typography>

          { menu.breakfast.map((item, key) =>
            <MenuItem key={key} {...item} />
          )}
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={classes.subheading}>Burgers</Typography>
          <Typography variant="body1">From 11am. All burgers served with chips</Typography>
          { menu.burgers.map((item, key) =>
            <MenuItem key={key} {...item} />
          )}
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={classes.subheading}>Seafood & Schnitzel</Typography>
          <Typography variant="body1">From 11am</Typography>
          { menu.seafood.map((item, key) =>
            <MenuItem key={key} {...item} />
          )}
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={classes.subheading}>To Share</Typography>
          { menu.toshare.map((item, key) =>
            <MenuItem key={key} {...item} />
          )}

        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={classes.subheading}>Cold Drinks</Typography>
          { menu.coldrinks.map((item, key) =>
            <MenuItem key={key} {...item} />
          )}
        </Grid>
      </Grid>
      <div className={classes.buttonContainer}>
        <Button href="/assets/RubysBulliMenu_Aug2020.pdf" color="primary" variant="contained" target="_blank">Download Menu</Button>
      </div>
    </div>
  )
}