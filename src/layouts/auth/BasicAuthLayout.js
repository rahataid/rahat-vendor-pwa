import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Box, Container } from '@mui/material';

//
import { APP_NAME, SPACING } from '@config';
import { Page } from '@components/page';
import GuestGuard from '@guards/GuestGuard';

// ----------------------------------------------------------------------

BasicAuthLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  showTitleHeading: PropTypes.bool,
};

export default function BasicAuthLayout({ title = '', showTitleHeading = false, children }) {
  return (
    <GuestGuard>
      <Box height="100vh">
        <Typography mt={SPACING.GRID_SPACING * 2} mb={SPACING.GRID_SPACING * 2} textAlign={'center'} variant="h3">
          {APP_NAME}
        </Typography>
        <Page title={title} showTitleHeading={showTitleHeading} nocard>
          <Stack>{children}</Stack>
        </Page>
      </Box>
    </GuestGuard>
  );
}
