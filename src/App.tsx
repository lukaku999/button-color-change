import React from 'react';

import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/*the string array containing the colors that will be used to change the button background color*/}
        <Button colors={['red', 'green', 'blue', 'orange', 'gray', 'black']} />
      </div>
    </div>
  );
}

export default App;
