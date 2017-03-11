import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {searchterm: ''};
  }

  render() {
    return (
      <div className='search-bar'>
        <input
        value={this.state.searchterm}
        onChange={(event) => this.setState({searchterm: event.target.value})} />
      </div>
    );
  }
}

export default SearchBar;
