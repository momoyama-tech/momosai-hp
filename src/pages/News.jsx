import React, { useEffect, useState } from 'react';
import TagSearch from '../components/TagSearch';
import './News.css';

const News = () => {
  // notifications を useState で初期化する
  const [notifications] = useState([
    { id: 1, content: "これはお知らせ1です", duration: 5000, tags: ["重要"], image: "https://example.com/image1.jpg", date: new Date("2023-11-01") },
    { id: 2, content: "お知らせ2: 何か大事なことがあります", duration: 7000, tags: ["一般"], image: "https://example.com/image2.jpg", date: new Date("2023-11-05") },
    { id: 3, content: "お知らせ3: おめでとうございます！", duration: 3000, tags: ["重要", "祝い事"], image: "https://example.com/image3.jpg", date: new Date("2023-11-10") },
    { id: 4, content: "お知らせ4: おめでとうございます！", duration: 2000, tags: ["一般", "祝い事"], image: "https://example.com/image4.jpg", date: new Date("2023-11-21") },
    // ここに必要なだけお知らせを追加
  ]);

  const [selectedTag, setSelectedTag] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const debounce = (func, delay) => {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobileView(window.innerWidth <= 600);
    }, 200);

    handleResize(); // 初回呼び出し
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTagClick = (tag) => setSelectedTag(tag);

  const filteredNotifications = selectedTag
    ? notifications.filter(notification => notification.tags.includes(selectedTag))
    : notifications;

  return (
    <div className={`news-container ${isMobileView ? 'mobile-view' : ''}`}>
      <TagSearch handleTagClick={handleTagClick} />
      <div className="main-content">
        <h1>桃山祭ニュースページ</h1>
        <div className="notification-container">
          {filteredNotifications.map(notification => (
            <div key={notification.id} className="notification-box">
              <img src={notification.image} alt={notification.content} />
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
