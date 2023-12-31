import PropTypes from 'prop-types';
// @mui
import { Box, Stack, Typography } from '@mui/material';

//
import { APP_NAME, RUMSAN_ASSETS_URL } from '@config';
import GuestGuard from '@guards/GuestGuard';

// ----------------------------------------------------------------------

LoginLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  illustration: PropTypes.string,
};

export default function LoginLayout({ children, illustration, title }) {
  return (
    <GuestGuard>
      <Box height="100vh">
        {/* <Page showTitleHeader={false}> */}
        <Stack spacing={1} height="70%" direction="column" alignItems="center" justifyContent="center">
          <img src={`${RUMSAN_ASSETS_URL}/rumsan/perma/logos/rumsan.png`} width="60" alt="Rahat" />
          <Typography variant="h2">{APP_NAME}</Typography>
          <Typography variant="body1" sx={{ p: 2, maxWidth: 400, textAlign: 'center' }}>
            Supporting vulnerable communities with a simple and efficient relief distribution platform.
          </Typography>
        </Stack>
        <Stack height="30%" sx={{ ml: 2, mr: 2 }}>
          {children}
        </Stack>
        {/* </Page> */}
      </Box>
    </GuestGuard>
  );
}
