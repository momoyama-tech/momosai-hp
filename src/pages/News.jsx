import React, { useEffect, useState } from 'react';

function News() {
  // useStateの第二引数（setNotifications）を削除して、未使用の変数警告を解決します。
  const [notifications] = useState([
    { content: "これはお知らせ1です", duration: 5000, tags: ["重要"], image: "https://example.com/image1.jpg", date: new Date("2023-11-01") },
    { content: "お知らせ2: 何か大事なことがあります", duration: 7000, tags: ["一般"], image: "https://example.com/image2.jpg", date: new Date("2023-11-05") },
    { content: "お知らせ3: おめでとうございます！", duration: 3000, tags: ["重要", "祝い事"], image: "https://example.com/image3.jpg", date: new Date("2023-11-10") },
    // ここに必要なだけお知らせを追加
  ]);

  const [selectedTag, setSelectedTag] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTagClick = (tag) => setSelectedTag(tag);

  const filteredNotifications = selectedTag
    ? notifications.filter(notification => notification.tags.includes(selectedTag))
    : notifications;

  return (
    <div className={`news-container ${isMobileView ? 'mobile-view' : ''}`}>
  
      <div className="sidebar">
        <h2>タグ検索</h2>
        <ul>
          <li onClick={() => handleTagClick(null)}>すべて</li>
          <li onClick={() => handleTagClick("重要")}>重要</li>
          <li onClick={() => handleTagClick("一般")}>一般</li>
          <li onClick={() => handleTagClick("祝い事")}>祝い事</li>
          
        </ul>
      </div>
      <div className="main-content">
        <h1>ニュースページ</h1>
        <div className="notification-container">
          {filteredNotifications.map((notification, index) => (
            <div key={index} className="notification-box">
              <img src={notification.image} alt="桃山祭" />
              <p>{notification.content}</p>
              <p className="date">{`${notification.date.getMonth() + 1}月${notification.date.getDate()}日`}</p>
              <p className="tags">タグ: {notification.tags.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
