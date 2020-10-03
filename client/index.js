import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'pcln-design-system'
import App from './App';


class Application extends React.Component{
  render(){
    return(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('app'))
