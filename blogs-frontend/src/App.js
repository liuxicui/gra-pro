import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import LeftNav from './components/LeftNav';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showLeftNav:false
    }
  }
  componentWillMount(){
    this.setLeftNav();
  }
  setLeftNav(){
    this.setState({showLeftNav : window.innerWidth > 750 ? true : false})
  }
  componentDidMount(){
    window.onresize = this.setLeftNav.bind(this);
  }
  render () {
    return(
      <div className='root'>
          {this.state.showLeftNav ? <LeftNav /> :
            <MuiThemeProvider><Header /></MuiThemeProvider>}
          <div className='mywrap'>
            {this.props.children}
          </div>
          {this.state.showLeftNav ? null : <Footer />}
      </div>
    )
  }
}

export default App;
