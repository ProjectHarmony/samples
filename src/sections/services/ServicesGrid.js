import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

export default function ServicesGrid() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10, mb: 10 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} >
          <Box sx={{width: 100, mb: 3}}>
            <Image src="./assets/logos/product-development.png" alt="oroduct"/>
          </Box>
          
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ textAlign: 'left', mb: 2 }}>
              SERVICE 1
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Viverra aliquet eget sit amet tellus cras adipiscing enim.
            </Typography>
          </m.div>
        </Grid>

        <Grid item xs={12} sm={6} >
          <Box sx={{width: 100, mb: 3}}>
            <Image src="./assets/logos/product-development.png" alt="oroduct"/>
          </Box>
          
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ textAlign: 'left', mb: 2 }}>
              SERVICE 2
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Viverra aliquet eget sit amet tellus cras adipiscing enim.
            </Typography>
          </m.div>
        </Grid>

        <Grid item xs={12} sm={6} >
          <Box sx={{width: 100, mb: 3}}>
            <Image src="./assets/logos/product-development.png" alt="oroduct"/>
          </Box>
          
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ textAlign: 'left', mb: 2 }}>
              SERVICE 3
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Viverra aliquet eget sit amet tellus cras adipiscing enim.
            </Typography>
          </m.div>
        </Grid>

        <Grid item xs={12} sm={6} >
          <Box sx={{width: 100, mb: 3}}>
            <Image src="./assets/logos/product-development.png" alt="oroduct"/>
          </Box>
          
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ textAlign: 'left', mb: 2 }}>
              SERVICE 4
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Viverra aliquet eget sit amet tellus cras adipiscing enim.
            </Typography>
          </m.div>
        </Grid>

        <Grid item xs={12} sm={6} >
          <Box sx={{width: 100, mb: 3}}>
            <Image src="./assets/logos/product-development.png" alt="oroduct"/>
          </Box>
          
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ textAlign: 'left', mb: 2 }}>
              SERVICE 5
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Viverra aliquet eget sit amet tellus cras adipiscing enim.
            </Typography>
          </m.div>
        </Grid>

        <Grid item xs={12} sm={6} >
          <Box sx={{width: 100, mb: 3}}>
            <Image src="./assets/logos/product-development.png" alt="oroduct"/>
          </Box>
          
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ textAlign: 'left', mb: 2 }}>
              SERVICE 6
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Viverra aliquet eget sit amet tellus cras adipiscing enim.
            </Typography>
          </m.div>
        </Grid>

      </Grid>

      {/*     <Box
          sx={{
            bottom: { xs: 24, md: 80 },
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            position: 'absolute',
            justifyContent: 'center',
          }}
        >
          {['logo_amazon', 'logo_hbo', 'logo_ibm', 'logo_lya', 'logo_spotify', 'logo_netflix'].map((logo) => (
            <m.div key={logo} variants={varFade().in}>
              <Image
                alt={logo}
                src={`https://minimal-assets-api-dev.vercel.app/assets/images/logos/${logo}.svg`}
                sx={{
                  m: { xs: 1.5, md: 3 },
                  height: { xs: 24, md: 32 },
                }}
              />
            </m.div>
          ))}
        </Box> */}
    </Container>
  );
}
