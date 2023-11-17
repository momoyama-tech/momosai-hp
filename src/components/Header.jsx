import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="momosai02.png" alt="桃山祭" />
        </Link>
      </div>
      <button className="nav-toggle" onClick={() => setIsNavVisible(!isNavVisible)}>
        <FontAwesomeIcon icon={isNavVisible ? faCircleXmark : faBars} />
      </button>
      <nav className={`navigation ${isNavVisible ? 'navigation-visible' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsNavVisible(false)}>ホーム</Link></li>
          <li><Link to="/news" onClick={() => setIsNavVisible(false)}>お知らせ</Link></li>
          <li><Link to="/project" onClick={() => setIsNavVisible(false)}>企画一覧</Link></li>
          <li><Link to="/access" onClick={() => setIsNavVisible(false)}>アクセス</Link></li>
          <li><Link to="/Notes" onClick={() => setIsNavVisible(false)}>注意事項</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;