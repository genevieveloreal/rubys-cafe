import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import { Call, Email } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth:"800px",
        margin: "24px auto",

    },
    cardDetails: {
        display:"flex",
        flexDirection: "column",
        flex:"1 0 auto",
        alignItems:"center",

    },
    content: {
        display:"flex",
        width:"100%",
        [theme.breakpoints.down("xs")]: {
            flexFlow: "column"
        }
    },

    cardHeader: {
      marginBottom: "24px"
    },

    cardMedia: {
        maxWidth: "200px",
        minWidth: "200px",
        [theme.breakpoints.down("xs")]: {
            height:200,
            width:"100%",
            maxWidth: "inherit"
        }
    },
    cardMediaRight: {
        width: 400,
        order: 2,
        [theme.breakpoints.down("xs")]: {
            height:200,
            width:"100%",
            order: "0"
        }
    },

    button: {
      margin: "10px 10px 0 0"
    },

    cardContent: {
        height: "90%",
        order: 1,
        paddingBottom: "0 !important",
    },

    cardActions: {
      padding: "8px 0"
    },
    cardContentFull: {
        height: "90%",
        order: 1,
        paddingBottom: "0 !important",
        width: "100%"

    },

    icon: {
        marginRight: "5px",
    }

}));

export function MenuCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.cardDetails}>
                <div className={classes.content}>
                <CardMedia className={classes.cardMedia} image="/assets/burger.jpg" alt="Ruby's Cafe serves the best burgers and chips."/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h2" className={classes.cardHeader}>Sea it and Eat it</Typography>
                    <Typography variant="body">We offer the best breakfast classics or lunch time favourites. Our Benny Roll is a crowd favourite among locals. </Typography>
                    <Typography variant="body">Order a milkshake and fries for take-away and enjoy the sun and surf down at Bulli beach.</Typography>
                    <CardActions disableSpacing={true}>
                        <Button className={classes.button} color="primary" href="/menu">View Menu</Button>
                    </CardActions>
                </CardContent>
                </div>

            </div>
        </Card>
    )
}

export function TakeawayCard() {

    const classes = useStyles();

    return (
      <Card className={classes.root}>
          <div className={classes.cardDetails}>
              <div className={classes.content}>

                  <CardContent className={classes.cardContent}>
                      <Typography variant="h2" className={classes.cardHeader}>The Best Bulli Takeaway</Typography>
                      <Typography variant="body1">Take a burger to the park. Take a milkshake to the beach. </Typography>
                      <Typography variant="body1">Have breakfast by the sea! Everything at Ruby's Cafe is takeaway. Call us now to order ahead.</Typography>
                      <CardActions disableSpacing={true} className={classes.cardActions}>
                          <Button className={classes.button} color="secondary" href="tel:+61242846890"  variant="contained"><Call className={classes.icon}/> 4284 6890</Button>
                          <Button className={classes.button} color="secondary" href="/assets/ruby_menu.pdf" variant="text">Download Menu</Button>

                      </CardActions>
                  </CardContent>
                  <CardMedia className={classes.cardMedia} image="/assets/rubyscafe_bulli_takeaway_food_2.jpg" alt="Takeaway food and coffee at Bulli Beach"/>
              </div>

          </div>
      </Card>
    )
}

export function DeliveryCard() {

    const classes = useStyles();

    return (
      <Card className={classes.root}>
          <div className={classes.cardDetails}>
              <div className={classes.content}>

                  <CardContent className={classes.cardContent}>
                      <Typography variant="h2" className={classes.cardHeader}>Ruby's Cafe Delivery (coming soon)</Typography>
                      <Typography variant="body1">On Stay-cation? We offer food delivery to Bulli, Woonona, Thirroul, Bellami and Corrimal. </Typography>
                      <Typography variant="body1">Staying at Bulli Tourist Park? We'll come to you!</Typography>
                      <CardActions disableSpacing={true}>
                          {/*<Button className={classes.button} color="primary" href="tel:+61242846890"><Call className={classes.icon}/> 4284 6890</Button>*/}
                      </CardActions>
                  </CardContent>
                  <CardMedia className={classes.cardMedia} image="/assets/rubys_bulli_delivery_food.jpg" alt="Takeaway food and coffee at Bulli Beach"/>
              </div>

          </div>
      </Card>
    )
}

export function ContactUsCard(){
    const classes = useStyles();

    return (
      <Card className={classes.root}>
          <div className={classes.cardDetails}>
              <div className={classes.content}>

                  <CardContent className={classes.cardContentFull}>
                      <Typography variant="h2" className={classes.cardHeader}>Location and Hours</Typography>
                      <Typography variant="body" component="p">Monday - Sunday from 7am </Typography>
                      <Typography variant="body" component="p">1 Farrel Road</Typography>
                      <Typography variant="body" component="p">Bulli, NSW, 2516 <a href="https://maps.google.com/maps?ll=-34.340914,150.923603&z=14&t=m&hl=en-US&gl=AU&mapclient=embed&daddr=Ruby%27s%20Cafe%20Bulli%201%20Farrell%20Rd%20Bulli%20NSW%202516@-34.3409139,150.9236027">[Get Directions]</a></Typography>
                      <CardActions disableSpacing={false} className={classes.cardActions}>
                          <Button className={classes.button} color="secondary" href="tel:+61242846890" variant="contained"><Call className={classes.icon}/> 4284 6890</Button>
                          <Button className={classes.button} color="secondary" href="mailto:hello@rubyscafe.com.au"><Email className={classes.icon}/> hello@rubyscafe.com.au</Button>
                      </CardActions>
                  </CardContent>
              </div>

          </div>
      </Card>
    )
}



