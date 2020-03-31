import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from "@material-ui/core/Container";
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner, { LocationBanner } from 'components/Banner';
import IntroBlurb from "components/IntroBlurb";
import { ThemeProvider } from "@material-ui/styles";
import theme from './theme';
import MenuContainer from "components/MenuContainer";
import { ContactUsCard, DeliveryCard, MenuCard, TakeawayCard } from "components/cards";
import Certificates from "components/Certificates";
import PhotoCard, { LocationCard } from "components/cards/PhotoCard";

const useStyles = makeStyles({
  logo: {
    maxWidth: 200
  },
    fullwidthcontainer: {
      maxWidth: "100%",
        padding:0,
      marginTop: "24px"
    },

  marginTop: {
    marginTop: "24px"
  }

});

export default function IndexPage() {
  const classes = useStyles();
  const mapiframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13177.508408889013!2d150.9235832!3d-34.3408795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f5a479999974ab3!2sRuby\'s+Cafe!5e0!3m2!1sen!2sau!4v1543406777602" height="350" width="100%" frameborder="0" style="border:0" allowfullscreen=""></iframe>'

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar>
        <Toolbar>
          <img src="assets/rubys-logo-text.png" className={classes.logo}
               alt="Ruby's Cafe on Bulli Beach"/>
        </Toolbar>
      </AppBar>
      <ParallaxProvider>
        <Banner/>
      </ParallaxProvider>
      <Container>
        <IntroBlurb/>
        <PhotoCard background="/assets/take_away_food_banner.jpg" height="200px"/>

        <MenuContainer/>
        <LocationCard background="/assets/location_banner.jpg" height="250px"/>

      </Container>

        <Container className={classes.fullwidthcontainer}>
          <ParallaxProvider>
            <LocationBanner/>
          </ParallaxProvider>

            <div dangerouslySetInnerHTML={{__html: mapiframe}} />
        </Container>
      <Container>
        <Certificates/>
      </Container>

    </ThemeProvider>
  );
}

ReactDOM.render(<IndexPage/>, document.getElementById('main'));