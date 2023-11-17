import React from 'react';
import './Topics.css'; // CSSファイルをインポート

function Topics() {
  return (
    <div className="topics-container">
      <h2 className="topics-title">TOPICS</h2>
      
      <div className="topics-items">
        <div className="topic-item">
          <img src="techsai.png" alt="桃山祭" />
          <h3 className="topic-subtitle">桃山祭のテック部出し物</h3>
          <p>桃山祭の説明...</p>
        </div>

        <div className="topic-item">
          <img src="techsai2.png" alt="桃山祭" />
          <h3 className="topic-subtitle">桃山祭のテック祭</h3>
          <p>桃山学院大学の文化祭の説明...</p>
        </div>

        <div className="topic-item">
          <img src="techsai3.png" alt="モモヤマ祭" />
          <h3 className="topic-subtitle">桃山祭限定テックホットサンド</h3>
          <p>ももさいの説明...</p>
        </div>
      </div>
    </div>
  );
}

export default Topics;
