import React from 'react';
import ReactDOM from 'react-dom';
import DirectorContainer from './containers/DirectorContainer.jsx'

window.onload = function(){
  ReactDOM.render(
    <DirectorContainer />,
    document.getElementById('app')
  );
}
