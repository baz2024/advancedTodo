import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Close" />
        </ListItem>
        <ListItem button onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;