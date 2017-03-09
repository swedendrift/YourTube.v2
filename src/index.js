import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDUJunh-nkI0I1kbUAMX82c6Ov1hdqxVS4';
YTSearch({key: API_KEY, term: 'surfing'}, (data) => {
  console.log(data)
})

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
