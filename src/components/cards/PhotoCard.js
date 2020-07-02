import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { CardContent } from "@material-ui/core";
import { Call, Email, Place } from "@material-ui/icons";

const useStyles = makeStyles( theme => ({
  container: props => ({
    backgroundImage: `url(${props.background})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
    height: props.height ? props.height : "100px",
    [theme.breakpoints.down("xs")]: {
      height: "auto"
    },
    borderRadius: "12px",
    maxWidth: "800px",
    margin: "0 auto"
  }),

  innerContainer: {
    backgroundColor: "rgba(0,0,0,.45)",
    height: "100%",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "column",
    color: "white",
    textAlign: "center"
  },
  icon: {
    marginRight: "5px",
  },
  button: {
    margin: "10px 10px 0 0"
  },
  cardHeader: {
    marginBottom: "24px"
  },
  link: {
    color: "#fff"
  },
  cardActions: {
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column"
    }
  }


}));

export default function PhotoCard(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Typography variant="h2" className={classes.cardHeader}>The Best Bulli Takeaway</Typography>
        <Typography variant="body1">Whether you are out for a bike ride, a run, a walk or hitting the surf - you can refuel at Ruby's Cafe.</Typography>
        <Typography variant="body1">Everything at Ruby's Cafe is takeaway. Call us now to order ahead.</Typography>
        <CardActions disableSpacing={true} className={classes.cardActions}>
          <Button className={classes.button} color="secondary" href="tel:+61242846890"  variant="contained"><Call className={classes.icon}/> 4284 6890</Button>
          <Button className={classes.button} color="secondary" href="/assets/rubysmenu_june2020.pdf" variant="contained">Download Menu</Button>

        </CardActions>
      </div>
    </div>
  )
}


export function LocationCard(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Typography variant="h2" className={classes.cardHeader}>Location and Hours</Typography>
        <Typography variant="body" component="p">Monday - Sunday from 8am </Typography>
        <Typography variant="body" component="p">1 Farrel Road</Typography>
        <Typography variant="body" component="p">Bulli, NSW, 2516</Typography>
        <CardActions disableSpacing={false} className={classes.cardActions}>
          <Button className={classes.button} color="secondary" href="tel:+61242846890" variant="contained"><Call className={classes.icon}/> 4284 6890</Button>
          <Button className={classes.button} color="secondary" href="https://www.google.com/maps/dir//-34.3409139,150.9236027/@-34.340914,150.923603,14z/data=!4m2!4m1!3e0?hl=en-US&gl=AU" target="_blank" variant="contained"><Place className={classes.icon}/> Directions</Button>

        </CardActions>
        <Button className={classes.button} color="secondary" href="mailto:hello@rubyscafe.com.au" variant="contained"><Email className={classes.icon}/> hello@rubyscafe.com.au</Button>
      </div>
    </div>
  )
}