import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';

const BreadcrumbsNav = () => (
  <Breadcrumbs sx={{ my: 2 }}>
    <Link underline="hover" color="inherit" href="#">Home</Link>
    <Typography color="text.primary">Tasks</Typography>
  </Breadcrumbs>
);

export default BreadcrumbsNav;