import React from 'react';
import Top from '../components/Top';
import MESSAGE from '../components/MESSAGE';
import Caution from '../components/Caution';
import ACCESS from '../components/ACCESS';

function Home() {
  return (
    <div>
     <Top />
     <MESSAGE />
     <Caution />
     <ACCESS />
    </div>
  );
}

export default Home;