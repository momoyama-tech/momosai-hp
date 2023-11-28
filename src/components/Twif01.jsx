import React, { useEffect } from "react";
import './Twif01.css';

function Twif01() {
  useEffect(() => {
    const addTwitterWidgetsScript = () => {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    };

    addTwitterWidgetsScript();
  }, []);

  return (
    <div className="tweet-conteiner">
      <h1>桃山祭関連のツイート</h1>
      <blockquote className="twitter-tweet">
        <p lang="ja" dir="ltr">
          今週の金土日から桃山祭です!
          <br />
          テック部ではホットサンドを提供します!
          <br />
          アッツアツのホットサンドを皆さん食べてください!
          <br />
          めちゃくちゃ美味しいですよ!
          <br />
          17:00からプロジェクションマッピングにも挑戦するので
          <br />
          皆さん見に来てください!!
          <br />
          #和泉市 #桃山学院大学 #桃山祭
          <a href="https://t.co/3UwdinkSZQ">pic.twitter.com/3UwdinkSZQ</a>
        </p>
        &mdash; 桃山学院大学 モモ・テック (@momoyama_tech)
        <a href="https://twitter.com/momoyama_tech/status/1726930988067168397?ref_src=twsrc%5Etfw">
          November 21, 2023
        </a>
      </blockquote>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          11/22は学校が休みで、23日は準備で、24~26日が学園祭で、27日が片付けで休みになります。
          <br />
          <br />
          (回答:とみー)
          <a href="https://t.co/XKw0AT9uqi">pic.twitter.com/XKw0AT9uqi</a>
        </p>
        &mdash; ももサポ（旧Momo-info） (@navinfo23)
        <a href="https://twitter.com/navinfo23/status/1726592203714355291?ref_src=twsrc%5Etfw">
          November 20, 2023
        </a>
      </blockquote>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          山雲さんのアピールポイントと言えば女性の連絡先が全く増えないこと
        </p>
        &mdash; 山雲かもしれない (@Kumo_kaze1341)
        <a href="https://twitter.com/Kumo_kaze1341/status/1724298483107254343?ref_src=twsrc%5Etfw">
          November 14, 2023
        </a>
      </blockquote>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          みんな卒業式してるの羨ましい秋卒します、がんばります(ノ_＜)
        </p>
        &mdash; ゆりなの (@19___yurinano){" "}
        <a href="https://twitter.com/19___yurinano/status/1636609523069894656?ref_src=twsrc%5Etfw">
          March 17, 2023
        </a>
      </blockquote>
      <a
        href="https://twitter.com/intent/tweet?screen_name=fol_69c&ref_src=twsrc%5Etfw"
        class="twitter-mention-button"
        data-show-count="false"
      >
        Tweet to @fol_69c
      </a>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          ご要望があったので、作成いたしました〜
          <br />
          とてもとても低浮上になると思いますが、よろしくです＾＾
          <a href="https://t.co/mJQQRd0Sgp">pic.twitter.com/mJQQRd0Sgp</a>
        </p>
        &mdash; 小鳥遊ふぉる☔＠革命前線大阪公演昼夜参戦 (@fol_69c)
        <a href="https://twitter.com/fol_69c/status/1700729981649973753?ref_src=twsrc%5Etfw">
          September 10, 2023
        </a>
      </blockquote>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          別に無人島に出張する予定はないんだが、ほら一家に一台って言いますし{" "}
          <a href="https://t.co/2ly5Y7YaxX">pic.twitter.com/2ly5Y7YaxX</a>
        </p>
        &mdash; 櫻井 雄大 (@Y_Sakurai){" "}
        <a href="https://twitter.com/Y_Sakurai/status/1652897347301679106?ref_src=twsrc%5Etfw">
          May 1, 2023
        </a>
      </blockquote>{" "}
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          一番エッチなコマンドについて<br />
          ずっと考えてる
        </p>
        &mdash; puts@puts (@hide_clone)
        <a href="https://twitter.com/hide_clone/status/798826864575844352?ref_src=twsrc%5Etfw">
          November 16, 2016
        </a>
      </blockquote>

      <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">バレンタインに女子からチョコ貰ってるやつとか幻想の類だと思ってたけど本当におるんよねぇ<br/>
      <br/>俺？もちろん母親から、、、いや中学までだな<br/>高校に入ってからは自分で買ってるわ<br/>むなしいねぇ</p>&mdash; ぷりてぃうぃんどちゃん (@Kumo_kaze1341)
       <a href="https://twitter.com/Kumo_kaze1341/status/1728132323261182170?ref_src=twsrc%5Etfw">November 24, 2023</a></blockquote>

       
       <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">たまに若いカップル見てると「お前らのうちほとんどが別れるんやろうな」とか考えて生きてる</p>
       &mdash; ぷりてぃうぃんどちゃん (@Kumo_kaze1341) 
       <a href="https://twitter.com/Kumo_kaze1341/status/1727320607858311219?ref_src=twsrc%5Etfw">November 22, 2023</a></blockquote>
      </div>

      
        );
}

        export default Twif01;
