import React from 'react';
import {ParallaxBanner} from 'react-scroll-parallax';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    logoContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: '50%',
        margin: 10,
        padding: 10,
        height: 360,
        width: 360,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },  
    logoContainerOuter: {
        height: '75vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 300,
        height: 300
    }
});

export default function Banner() {
    const classes = useStyles({});

    return (
        <ParallaxBanner layers={[
            {
                image: "/assets/hero-bg.jpg",
                amount: 0.5,
            },
        ]}
        style={{
            height: '75vh',
            zIndex: '-1'
        }}
      >
        <div className={classes.logoContainerOuter}>

        </div>
        </ParallaxBanner>
    )
}

export function LocationBanner(){
  const classes = useStyles({});


  return (
      <ParallaxBanner layers={[
          {
              image: "/assets/rubys_cafe_bulli_beach.jpg",
              amount: 0.5,
          },
      ]}
                      style={{
                          height: '50vh',
                          zIndex: '-1'
                      }}
      >
          <div className={classes.logoContainerOuter}>

          </div>
      </ParallaxBanner>
    )
}