// @mui
import { styled } from '@mui/material/styles';

// components
import Page from '../components/Page';
// sections
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
  LandingSlider,
} from '../sections/home';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Batiboot: Logistics">
      
      <LandingFirstPage />
      <ContentStyle>
      {/* <LandingSlider /> */}
        <LandingThirdPage />
        {/* <LandingSecondPage /> */}
       <AboutUs />
       <ContactUs />
      </ContentStyle>
    </Page>
  );
}
