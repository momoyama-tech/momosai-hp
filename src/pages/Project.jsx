import React, { useState } from 'react';
import './Project.css';
import Map from '../components/Map';
import MapMockStore from '../components/MapMockStore';

function Project() {
  const [activeTab, setActiveTab] = useState('topic');

  return (
    <div className="project">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'topic' ? 'active' : ''}`}
          onClick={() => setActiveTab('topic')}
        >
          屋内展示
        </button>
        <button
          className={`tab ${activeTab === 'news' ? 'active' : ''}`}
          onClick={() => setActiveTab('news')}
        >
           模擬店 
        </button>
      </div>
      {activeTab === 'topic' && (
        <div className="content">
          <h1>屋内展示</h1>
          <Map />
        </div>
      )}
      {activeTab === 'news' && (
        <div className="content">
          <h1>模擬店一覧</h1>
          <MapMockStore />
        </div>
      )}
    </div>
  );
}

export default Project;
