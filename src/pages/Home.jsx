import React from 'react';
import MESSAGE from '../components/MESSAGE';
import Caution from '../components/Caution';
import ACCESS from '../components/ACCESS';
import Topics from '../components/Topics';
import Top from '../components/Top';
import Newss from '../components/Newss';
import Twif01 from '../components/Twif01';

function Home() {
  return (
    <div>
     <Top />
     <MESSAGE />
     <Newss />
     <Topics />
     <Caution />
     <Twif01 />
     <ACCESS /> 
    </div>
  );
}

export default Home;