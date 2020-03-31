import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
   textContainer: {
       textAlign:"center",
       marginTop: "44px"
   }
});

export default function IntroBlurb(){

    const classes = useStyles();

    return (
        <div className={classes.textContainer}>
            <Typography variant="h1">Ruby's Cafe on Bulli Beach</Typography>
            <p>Ruby's Cafe is a hidden gem in Bulli, serving the best all day breakfast and lunch classics.</p>
            <p>We serve fresh food, prepared daily. Check out our menu for our food and coffee options. All items are served takeaway.</p>
            <p>Open from 7am daily</p>
        </div>
    )
}