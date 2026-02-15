import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2EA3F2',
      dark: '#1a7bc4',
    },
    text: {
      primary: '#1a1a2e',
      secondary: '#5a6370',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: "'Open Sans', Arial, sans-serif",
    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      color: '#1a1a2e',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 700,
      lineHeight: 1.3,
      color: '#1a1a2e',
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1a1a2e',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#5a6370',
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
      color: '#5a6370',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          textTransform: 'none',
          fontWeight: 600,
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});

export default theme;
