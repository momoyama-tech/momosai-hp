// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="momosai02.png" alt="桃山祭" />
        </Link>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/news">お知らせ</Link></li>
          <li><Link to="/project">企画一覧</Link></li>
          <li><Link to="/access">アクセス</Link></li>
          <li><Link to="/Notes">注意事項</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;