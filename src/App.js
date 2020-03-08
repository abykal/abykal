import React from 'react';

import Header from './components/Header'
import SuperBody from './components/SuperBody'
import Greetings from './components/Greetings'


function App() {
  return (
    <div>
      <Greetings />
      <Header />
      <SuperBody />
    </div>
  );
}

export default App;
// className="lg:flex lg:flex-col p-12 bg-gray-900"