import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#24292E',
        detail: '#FF3939'
      },
      secondary: {
        main: 'rgba(32, 35, 43, 0.95)',
        detail: '#34343C',
        sidebar:'#1A1C21'
      },
      appbar:{
        main: '#20232B'
      },
      form:{
        fontColor: '#767676'
      }
    },
});