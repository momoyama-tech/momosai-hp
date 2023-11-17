import React, { useEffect, useState } from 'react';

function News() {
  const [notifications, setNotifications] = useState([
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

  const rows = Math.ceil(notifications.length / 3);

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
          {/* 他のタグも適宜追加 */}
        </ul>
      </div>
      <div className="main-content">
        <h1>ニュースページ</h1>
        <div className="notification-container">
          {Array.from({ length: rows }, (_, rowIndex) => (
            <div key={rowIndex} className={`notification-row ${isMobileView ? 'mobile-row' : ''}`}>
              {filteredNotifications.slice(rowIndex * 3, rowIndex * 3 + 3).map((notification, index) => (
                <div key={index} className={`notification-box ${isMobileView ? 'mobile-box' : ''}`}>
                  {notification.image && <img src={notification.image} alt="Notification Image" />}
                  <p>{notification.content}</p>
                  <p className="date">{`${notification.date.getMonth() + 1}月${notification.date.getDate()}日`}</p>
                  <p className="tags">タグ: {notification.tags.join(", ")}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .news-container {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
        }

        .sidebar {
          padding: 20px;
          border-right: 1px solid #ccc;
          max-width: 200px; /* 左側の最大幅を指定 */
        }

        .main-content {
          flex: 1;
          padding: 20px;
        }

        .notification-container {
          display: flex;
          flex-wrap: wrap;
        }

        .notification-row {
          display: flex;
          width: 100%;
        }

        .notification-box {
          border: 1px solid #ccc;
          padding: 10px;
          margin: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          flex: 1 0 calc(33.33% - 20px);
          max-width: calc(33.33% - 20px);
        }

        img {
          max-width: 100%;
          height: auto;
          margin-bottom: 10px;
        }

        .date {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .tags {
          margin-top: 8px;
          font-size: 12px;
        }

        .sidebar h2 {
          margin-bottom: 10px;
        }

        .sidebar ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .sidebar li {
          cursor: pointer;
          margin-bottom: 5px;
        }

        .sidebar li:hover {
          color: blue;
        }

        /* モバイルビュー用のスタイル */
        .news-container.mobile-view {
          flex-direction: column;
        }

        .notification-row.mobile-row {
          flex-direction: column;
        }

        .notification-box.mobile-box {
          max-width: 100%;
        }

        /* iPhone SE用のスタイル */
        @media only screen and (max-width: 320px) {
          .notification-box.mobile-box {
            margin-bottom: 10px; /* 余白を追加 */
          }
        }
      `}</style>
    </div>
  );
}

export default News;
