import { m } from 'framer-motion';
// @mui
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Typography, Button, OutlinedInput, Grid } from '@mui/material';
// components
import { MotionViewport, varFade } from '../../components/animate';
import Image from '../../components/Image';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
    marginTop: -45,
  padding: theme.spacing(5, 5, 5, 5),
  color: theme.palette.common.white,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`,
}));

// ----------------------------------------------------------------------

TrackingOrder.propTypes = {
  description: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
};

export default function TrackingOrder({ img, price, title, description, ...other }) {
  return (
    <Box {...other}>
      {/* <Image
        visibleByDefault
        disabledEffect
        src={img}
        sx={{
          left: 40,
          zIndex: 9,
          width: 140,
          position: 'relative',
          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.24))',
        }}
      /> */}

      <ContentStyle>
        {/* <Grid content spacing={2}>
          <Grid item sx={12}>
            <Grid item md={6}>
              <Image src="\assets\logos\magnifying.svg" alt="search" />
            </Grid>
            <Grid item md={6}>
              <Typography variant="h4" sx={{ whiteSpace: 'pre-line' }}>
                Track Your Order
              </Typography>
            </Grid>
          </Grid>
        </Grid> */}
        <Grid container spacing={2}>
          <Grid item xs={2} sx={{ mt: 4, mr: -3}}>
          <Image src="\assets\logos\magnifying.svg" alt="search" />
          </Grid>
          <Grid item xs={7}>
             <m.div variants={varFade().inRight}>
          <Typography variant="h4" align="center" sx={{ mt:5 }}>
                Track Your Order
              </Typography>
              </m.div>
          </Grid>
        </Grid>
        <m.div variants={varFade().inRight}>
        <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
          Please Input your Tracking Number on Space Provided.
        </Typography>
          </m.div>
        <Stack direction="row" spacing={3} alignItems="center" justifyContent="space-between">
          <OutlinedInput
            size="small"
            placeholder="Tracking Order"
            sx={{
              width: 1,
              color: 'common.white',
              fontWeight: 'fontWeightMedium',
              bgcolor: (theme) => alpha(theme.palette.common.black, 0.16),
              '& input::placeholder': {
                color: (theme) => alpha(theme.palette.common.white, 0.48),
              },
              '& fieldset': { display: 'none' },
            }}
          />
          <Button color="warning" variant="contained" sx={{ p: 1 }}>
            Search
          </Button>
        </Stack>
      </ContentStyle>
    </Box>
  );
}
