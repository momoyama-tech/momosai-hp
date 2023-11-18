import React from 'react';
import MESSAGE from '../components/MESSAGE';
import Caution from '../components/Caution';
import ACCESS from '../components/ACCESS';
import Topics from '../components/Topics';
import Top from '../components/Top';

function Home() {
  return (
    <div>
      <Top />
     <MESSAGE />
     <Topics />
     <Caution />
     <ACCESS />
    </div>
  );
}

export default Home;