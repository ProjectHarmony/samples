import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, Grid, Paper, Card } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';



// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
  backgroundColor: 'rgba(51, 78, 111, 0.8)',
  padding: '4em',
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
 /*  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  }, */
}));

const monStyle = styled((props) => <Typography variant="h2" {...props} />)(({ theme }) => ({
    color: 'red',
    zIndex: 99,
}));

// ----------------------------------------------------------------------

export default function LandingFirstPage() {
  return (
    <MotionContainer>
      <RootStyle>
        {/* <HeroOverlayStyle alt="" src="" variants={varFade().in} /> */}

         <HeroImgStyle
          alt="hero"
          src="https://images.unsplash.com/photo-1585713181935-d5f622cc2415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          variants={varFade().inUp}
        /> 
    
        <Container>
        <m.div variants={varFade().inUp}>
          <ContentStyle>
          <Grid>
            <m.div variants={varFade().inRight}>
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  Welcome to BATIBOOT.
                </Typography>

            </m.div>


            <m.div variants={varFade().inRight}>
              <Typography variant="h4" m sx={{ color: 'common.white' }}>
                Your secured shipping lorem ipsum
              </Typography>
            </m.div>
            
            {/* <Stack spacing={2.5} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
             

              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={
                    <Image
                      alt="sketch icon"
                      src="https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_figma_small.svg"
                      sx={{ width: 20, height: 20, mr: 1 }}
                    />
                  }
                  value={
                    <Link
                      href="https://www.figma.com/file/x7earqGD0VGFjFdk5v2DgZ/%5BPreview%5D-Minimal-Web?node-id=866%3A55474"
                      target="_blank"
                      rel="noopener"
                      color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      Preview Figma
                    </Link>
                  }
                />
              </m.div>
            </Stack> */}

            <m.div variants={varFade().inRight}>
            {/* <Stack direction="row" spacing={1} sx={{ flexShrink: 0, mr: 1.5 }}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DASHBOARD.root}
                startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
              >
                Log-in
              </Button>

              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DASHBOARD.root}
                startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
              >
                Sign-Up
              </Button>
              </Stack> */}
            </m.div>
            </Grid>
         
          </ContentStyle>
          </m.div>
          {/* <Grid container spacing={1} sx={{mt: '2em'}}>
                <Grid md={3}><Card sx={{zIndex: 99, ml: 2, mr: 2,}}>asdasdas</Card></Grid>
                <Grid md={3}><Card sx={{zIndex: 99, ml: 2, mr: 2,}}>asdasdas</Card></Grid>
                <Grid md={3}><Card sx={{zIndex: 99, ml: 2, mr: 2,}}>asdasdas</Card></Grid>
                <Grid md={3}><Card sx={{zIndex: 99, ml: 2, mr: 2,}}>asdasdas</Card></Grid>
            </Grid> */}
        </Container>
        
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
