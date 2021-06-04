import React from 'react';
import { Link } from 'react-router-dom';

// material-ui icons
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import WcIcon from '@material-ui/icons/Wc';

// dashboard list items
export const mainListItems = (
  <div>
    {/* parents management button */}
    <ListItem button>
      <ListItemIcon>
        <WcIcon />
      </ListItemIcon>
      <ListItemText primary="Parents" />
    </ListItem>
    {/* password reset button */}
    <ListItem button component={Link} to="/passwordreset">
      <ListItemIcon>
        <VpnKeyIcon />
      </ListItemIcon>
      <ListItemText primary="Password Reset" />
    </ListItem>
    {/* Logout button */}
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);
