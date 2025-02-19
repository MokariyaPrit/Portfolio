// src/components/Loader.tsx
import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <Box textAlign="center" mt={5}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
