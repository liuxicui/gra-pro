import React from 'react';

import {Link} from 'react-router';

class Footer extends React.Component {
  render () {
    return(
      <footer>
      <Link to='/' activeStyle={{color:'brown'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i><br />首页</Link>
      <Link to='/Blog' activeStyle={{color:'brown'}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i><br />博客</Link>
      <Link to='/Search' activeStyle={{color:'brown'}}><i className="fa fa-search" aria-hidden="true"></i><br />搜索</Link>
      <Link to='/About' activeStyle={{color:'brown'}}><i className="fa fa-user-o" aria-hidden="true"></i><br />我的</Link>
      </footer>
    )
  }
}

export default Footer;
