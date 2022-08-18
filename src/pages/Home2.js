// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from '../_mock';
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
  TransitionOne,
  LandingCounts,
  SpecialServices,
  ContactNow,
  CarouselLandingPageOne
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
        <CarouselLandingPageOne />
        <ContentStyle>
          {/* <LandingSlider /> */}
          <LandingThirdPage />
          <LandingCounts />
          <SpecialServices />
          <ContactNow/>
          {/* <AboutUs /> */}
          <ContactUs />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
