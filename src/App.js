import React from 'react';

import Header from './components/Header'
import SuperBody from './components/SuperBody'
import Greetings from './components/Greetings'


function App() {
  return (
    <div className="flex flex-col">
      <Greetings />
      <div className="relative flex flex-col justify-between w-screen mx-auto font-sans text-base max-w-1440 text-dawn md:flex-row">
        <Header />
        <SuperBody />
      </div>
    </div>
  );
}

export default App;
// className="lg:flex lg:flex-col p-12 bg-gray-900"