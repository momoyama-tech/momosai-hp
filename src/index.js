import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from "react-helmet"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
        <title>桃山祭ホームページ</title>
        <meta
            name="description"
            content="桃山祭のホームページです。桃山学院大学にて、秋に行われる学園祭である桃山祭の情報を発信していきます。みなさん、桃山祭にきてください!"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
        {/* OGP ここから */}
        <head prefix="og: http://ogp.me/ns#" />
        <meta property="og:url" content="https://momosai.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="桃山祭ホームページ" />
        <meta property="og:description" content="桃山祭のホームページです。桃山学院大学にて、秋に行われる学園祭である桃山祭の情報を発信していきます。みなさん、桃山祭にきてください!" />
        <meta property="og:site_name" content="桃山祭ホームページ" />
        <meta property="og:image" content="https://momosai-andrew.jp/wp-content/uploads/2023/07/momoyama_key.jpg" />
        {/* OGP ここまで */}
        {/* Google Font ここから */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
        {/* Google Font ここまで */}
      </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
