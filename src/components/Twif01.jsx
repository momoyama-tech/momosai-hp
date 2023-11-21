import React, { useEffect } from 'react';

function Twif01() {

  useEffect(() => {
    const addTwitterWidgetsScript = () => {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    };

    addTwitterWidgetsScript();
  }, []);

  return (
    <div>
      <blockquote className="twitter-tweet">
        <p lang="ja" dir="ltr">
          今週の金土日から桃山祭です!<br />
          テック部ではホットサンドを提供します!<br />
          アッツアツのホットサンドを皆さん食べてください!<br />
          めちゃくちゃ美味しいですよ!<br />
          17:00からプロジェクションマッピングにも挑戦するので<br />
          皆さん見に来てください!!<br />
          #和泉市 #桃山学院大学 #桃山祭
          <a href="https://t.co/3UwdinkSZQ">pic.twitter.com/3UwdinkSZQ</a>
        </p>
        &mdash; 桃山学院大学 モモ・テック (@momoyama_tech)
        <a href="https://twitter.com/momoyama_tech/status/1726930988067168397?ref_src=twsrc%5Etfw">
          November 21, 2023
        </a>
      </blockquote>
    </div>
  );
}

export default Twif01;