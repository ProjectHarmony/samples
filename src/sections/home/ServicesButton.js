/* import * as React from 'react'; */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import Slider from 'react-slick';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Grid, setRef, Skeleton, Stack } from '@mui/material';
// components
import Image from '../../components/Image';

import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const STEPS = [
  {
    src: '/assets/logos/logo1.svg',
    title: 'Customize Packaging',
    desc: 'Branding',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  },
  {
    src: '/assets/logos/logo2.svg',
    title: 'Rebranding',
    desc: 'Search for your doctor.',
    img: 'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
  },
  {
    src: '/assets/logos/logo3.svg',
    title: 'Importing',
    img: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    src: '/assets/logos/logo4.svg',
    title: 'Private Labeling',
    img: 'https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    src: '/assets/logos/logo5.svg',
    title: 'Warehousing',
    desc: 'Consult with your doctor.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    src: '/assets/logos/logo6.svg',
    title: 'Fullfilment',
    desc: 'Consult with your doctor.',
    img: 'https://images.unsplash.com/photo-1590497008432-598f04441de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1091&q=80',
  },
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(5),
  },
}));

//-----------------------------------------------------------------------

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  /* maxWidth: 520,  */
  zIndex: 999,
  backgroundColor: 'rgba(51, 78, 111, 0.8)',
  margin: 'auto',
  width: '50%',
  padding: '10px',
  textAlign: 'center',
 /*  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  marginTop: '150px',
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
  backgroundColor: 'rgba(51, 78, 111, 0.8)',
  padding: '4em', */
}));

// ----------------------------------------------------------------------

const RedLettering = styled('Typography')(({ theme }) => ({
  color: '#ffffff',
  cursor: 'pointer',
}));

// ----------------------------------------------------------------------
ServicesButton.propTypes = {
  setRef: PropTypes.any,
  onHandle: PropTypes.any,
};

const settings = {
  display: 'flex',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function ServicesButton({ setRef, onHandle }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <RootStyle ref={setRef}>
      
            {loading === true ? (
      <Grid container spacing={1} sx={{ p: 2, mt: -3 }}>
       {/*  <Grid
          item
          xs={12}
          sm={12}
          md={12}
          // sx={{
          //   display: 'flex',
          //   justifyContent: 'center',
          //   justifyItems: 'center',
          //   alignItems: 'center',
          //   textAlign: 'center',
          // }}
        >
   
            <Skeleton animation="wave" width={'50%'} height={25} sx={{ mx: 'auto' }} />
    
        </Grid>
 */}
      

        {/* <Grid container spacing={1} sx={{ p: 10, mt: -15 }}>
          <Grid item xs={12} md={12}>
            <Slider {...settings}>
              {STEPS.map((s) => (
                <m.div variants={varFade().inUp}>
                  <Skeleton
                    animation="wave"
                    // variant="rectangular"
                    sx={{
                      p: {
                        xs: 4,
                        md: 3,
                        lg: 2,
                      },
                      mx: 'auto',
                      // width: 140,
                      // height: 130,
                    }}
                    width={150}
                    height={500}
                  />

                  <Skeleton
                    animation="wave"
                    width={'50%'}
                    height={15}
                    sx={{
                      mt: -10,
                      mx: 'auto',
                      mb: 3,
                    }}
                  />
                  <Skeleton
                    animation="wave"
                    width={'50%'}
                    height={15}
                    sx={{
                      mt: -2,
                      mx: 'auto',
                      mb: 3,
                    }}
                  />
                  <Skeleton
                    animation="wave"
                    width={'50%'}
                    height={15}
                    sx={{
                      mt: -2,
                      mx: 'auto',
                      mb: 3,
                    }}
                  />
                </m.div>
              ))}
            </Slider>
          </Grid>
        </Grid> */}
        </Grid>
            ) : (
      <Grid container spacing={1} sx={{ p: 2, mt: -3 }} component={MotionViewport}>
        <Grid container spacing={1} sx={{ p: 10, mt: 32 }}>
          <Grid item xs={12} md={12}>
            
            <Slider {...settings}>
              
              {STEPS.map((s) => (
                <m.div variants={varFade().inUp}>
                  
                  <Image
                    onClick = {() => onHandle(s.img)}
                    src={s.src}
                    alt={s.title}
                    sx={{
                      mx: 'auto',
                      width: { xs: 150, md: 150 },
                      height: 'auto',
                      "&:hover": {
                        backgroundColor: 'rgb(66, 66, 66, 0.42)'
                      
                      }
                    }}
                  />
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ textAlign: 'center', fontSize: { xs: '20px', md: '24px' }, mt: 1 }}
                  >
                    <RedLettering>{s.title}</RedLettering>
                  </Typography>
                  
                </m.div>
                
              ))}
            </Slider>
          </Grid>
        </Grid>

    
      </Grid> ) }
    </RootStyle>
  );
}
