import React from 'react';

import Header from './components/Header'
import SuperBody from './components/SuperBody'

function App() {
  return (
    <div className="lg:flex lg:flex-col p-12 bg-gray-900">
      <Header />
      <SuperBody />
    </div>
  );
}

export default App;
