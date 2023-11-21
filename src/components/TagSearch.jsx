import React from 'react';

function TagSearch({ handleTagClick }) {
  return (
    <div className="sidebar">
      <h2>タグ検索</h2>
      <ul>
        <li onClick={() => handleTagClick(null)}>すべて</li>
        <li onClick={() => handleTagClick("重要")}>重要</li>
        <li onClick={() => handleTagClick("一般")}>一般</li>
        <li onClick={() => handleTagClick("祝い事")}>祝い事</li>
        {/* 他のタグも必要に応じて追加 */}
      </ul>
    </div>
  );
}

export default TagSearch;
