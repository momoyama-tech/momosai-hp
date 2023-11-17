import React from 'react';
import MESSAGE from '../components/MESSAGE';
import Caution from '../components/Caution';
import ACCESS from '../components/ACCESS';
import Topics from '../components/Topics';

function Home() {
  return (
    <div>
     <MESSAGE />
     <Topics />
     <Caution />
     <ACCESS />
    </div>
  );
}

export default Home;