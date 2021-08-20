import React from 'react';
import PintarItem from './Componentes/PintarItem';
import Todos from './Componentes/Todos';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import Navbar from './Componentes/Navbar';
import theme from './Componentes/TemaConfig';

function App() {
  return (
    <div>
      <Navbar/>
      <ThemeProvider theme={theme}>
        <Typography variant="body1" align = 'center' paragraph>
          <Todos/>
          <PintarItem />
        </Typography>
      </ThemeProvider>
    </div>
  )
}

export default App