import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {searchterm: ''};
  }

  render() {
    return (
      <div>
        <input
        value={this.state.searchterm}
        onChange={(event) => this.setState({searchterm: event.target.value})} />
        Input data: {this.state.searchterm}
      </div>
    );
  }
}

export default SearchBar;
