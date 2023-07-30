import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Container = ({ title, children }) => {
  return (
    <Box>
      <Typography component="h1" variant="h3">
        {title}
      </Typography>
      {children}
    </Box>
  );
};
export default Container;
Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
