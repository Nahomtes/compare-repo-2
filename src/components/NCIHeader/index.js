import React from 'react';
import { withStyles } from '@material-ui/core';
import NCINavBar from '../NCINavBar';
import NCILogoBar from '../NCILogoBar';

const styles = () => ({
  headerBar: {
    color: '#8A95A7',
    width: '100%',
    margin: '0 auto',
    minHeight: '100px',
    justifyContent: 'space-between',
    background: '#ffffff',
    position: 'fixed',
    zIndex: '40002',
    top: 24,
  },
});

const NCIHeader = ({ classes, ...props }) => {
  return (
    <div id="header" className={classes.headerBar}>
      <NCILogoBar />
      <NCINavBar />
    </div>
  );
};

export default withStyles(styles)(NCIHeader);
