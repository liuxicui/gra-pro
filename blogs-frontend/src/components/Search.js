import React from 'react';


class Search extends React.Component {
  render () {
    return(
        <div className="search">
            <form className="search-form">
              <input className='search-sousuo' type='text'/>
              <button className='search-btn'>搜索</button>
            </form>
      </div>
    )
  }
}

export default Search;
