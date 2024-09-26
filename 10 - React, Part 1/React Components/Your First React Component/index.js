import React from 'react';
import ReactDOM from 'react-dom/client';

import MyComponent from './App';
import NewComponent from './NewComponent';

function App() {
  return (
    <div>
      <MyComponent />
      <NewComponent />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
