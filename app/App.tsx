import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';

interface AppProps {
    children: React.ReactNode;
  }
  
  function App({ children }: AppProps) {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }
  

export default App;
