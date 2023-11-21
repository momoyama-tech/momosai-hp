import React, { useEffect, useState } from 'react';

const News = () => {
  // notifications を useState で初期化する
  const [notifications] = useState([
    { id: 1, content: "桃山祭まであと2日!", tags: ["桃山祭2023"], image: "midori.png", date: new Date("2023-11-22") },
    { id: 2, content: "桃山祭まであと4日!", tags: ["桃山祭2023"], image: "pan.png", date: new Date("2023-11-20") },
    { id: 3, content: "桃山祭当日限定！テック部ホットサンド販売!", tags: ["桃山祭2023","テック部","模擬店"], image: "kuso.png", date: new Date("2023-11-19")},
    { id: 4, content: "桃山祭まであと6日!", tags: ["桃山祭2023"], image: "pan2.png", date: new Date("2023-11-18") },
    { id: 5, content: "桃山祭当日限定! モモンガP新作ゲーム!", tags: ["桃山祭2023","モモンガP","ゲーム"], image: "momosai2.png", date: new Date("2023-11-18") },
    { id: 6, content: "桃山祭当日でもテック部は新入部員募集中!", tags: ["桃山祭2023","テック部"], image: "teck.png", date: new Date("2023-11-13")},
    // ここに必要なだけお知らせを追加
  ]);

  const [selectedTag] = useState(null);
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

  const filteredNotifications = selectedTag
    ? notifications.filter(notification => notification.tags.includes(selectedTag))
    : notifications;

  return (
    <div className={`news-container ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="main-content">
        <h1 className='tit'>桃山祭News</h1>
        <div className="notification-container">
          {filteredNotifications.map(notification => (
            <div key={notification.id} className="notification-box">
              <img src={notification.image} alt={notification.content} />
              <h2 className="date">{`${notification.date.getMonth() + 1}月${notification.date.getDate()}日`}</h2>
              <h1 className='title2'>{notification.content}</h1>
              <h2 className="tags">タグ: {notification.tags.join(", ")}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
