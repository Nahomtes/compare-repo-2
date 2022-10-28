import { lighten, darken } from 'polished';
import config from './config';

const PRIMARY = config.profile.primaryColor;
const SECONDARY = '#ff6350';

const theme = {
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    primary: {
      light: lighten(0.2, PRIMARY),
      main: PRIMARY,
      dark: darken(0.2, PRIMARY),
      contrastText: '#fff',
    },
    secondary: {
      light: lighten(0.2, SECONDARY),
      main: SECONDARY,
      dark: darken(0.2, SECONDARY),
      contrastText: '#fff',
    },
    text: {
      primary: '#5A5F5F',
    },
    footer: '#2e2d35',
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        border: 0,
        padding: '6px 12px',
        minWidth: '32px',
        minHeight: '32px',
        height: '32px',
        textTransform: 'none',
      },
    },
    MuiCard: {
      root: {
        border: `1px solid #ddd`,
      },
    },
    MuiIconButton: {
      root: {
        width: '32px',
        height: '32px',
        padding: '0px',
      },
    },
    MuiTablePagination: {
      root: {
        height: '36px',
        minHeight: '36px',
      },
      toolbar: {
        height: '36px',
        minHeight: '36px',
      },
    },
    MuiTabs: {
      root: {
        borderBottom: '1px solid #616161',
      },
      indicator: {
        display: 'none',
      },
    },
    Mui: {
      disabled: {
        color: 'black !important',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        minWidth: '10px !important',
        '&$selected': {
          backgroundColor: PRIMARY,
          color: 'white',
          '&:hover': { backgroundColor: PRIMARY },
        },
        '&:hover': { backgroundColor: lighten(0.3, PRIMARY) },
      },
      textColorInherit: {
        color: 'rgb(52, 137, 202)',
        '&.Mui-disabled': {
          color: '#9e9e9e !important',
        },
      },
    },
    MuiTypography: {
      // colorSecondary: {
      //   color: '#E2DFDF',
      // },
      colorError: {
        color: SECONDARY,
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: 0,
        paddingRight: '32px',
        minHeight: 0,
        '&$expanded': {
          minHeight: 0,
          margin: 0,
        },
      },
      content: {
        width: '100%',
        margin: 0,
        '&$expanded': {
          margin: 0,
        },
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: 0,
        paddingRight: '32px',
      },
    },
    MuiLinearProgress: {
      root: {
        height: '1px',
      },
    },
  },
  Drawer: {
    paper: {
      marginTop: '230px', // NCILinkBar(23px), NCILogoBar(100px), NCINavBar(59px), and NavBar(48px)
      height: 'calc(100% - 230px)',
    },
  },
  zIndex: {
    navBar: 1002,
    navPanel: 1001,
  },
  header: {
    height: '182px', // // NCILinkBar(23px), NCILogoBar(100px), and NCINavBar(59px)
    spacing: '52px', // spacing below the header
  },
};

export default theme;
