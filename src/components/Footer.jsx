import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        {/* ソーシャルメディアリンク */}
        <a href="https://instagram.com/momoyama.tech?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://twitter.com/momoyama_tech" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <div className="footer-nav">
        {/* React RouterのLinkを使ったナビゲーションリンク */}
        <Link to="/">ホーム</Link>
        <div className="nav-divider"></div>
        <Link to="/news">お知らせ</Link>
        <div className="nav-divider"></div>
        <Link to="/project">企画一覧</Link>
        <div className="nav-divider"></div>
        <Link to="/access">アクセス</Link>
        <div className="nav-divider"></div>
        <Link to="/notes">注意事項</Link>
      </div>
      <div className="footer-bottom">
        {/* 著作権表示 */}
        &copy; Momoyama tech club. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;