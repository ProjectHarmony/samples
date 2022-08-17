// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';
import {
    HomeHero,
  /*   HomeMinimal, */
    HomeDarkMode,
    ContactUs,
    HomeColorPresets,
    HomePricingPlans,
    HomeAdvertisement,
    HomeCleanInterfaces,
    AboutUs,
    LandingFirstPage,
    LandingSecondPage,
    LandingThirdPage,
  } from '../sections/home';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
  }));
  

// ----------------------------------------------------------------------

export default function Home2() {
  return (
    <Page title="Home">
      <RootStyle>
        <LandingFirstPage />
         <ContentStyle>
      {/* <LandingSlider /> */}
        <LandingThirdPage />
        {/* <LandingSecondPage /> */}
       <AboutUs />
       <ContactUs />
      </ContentStyle>
       
      </RootStyle>
    </Page>
  );
}
