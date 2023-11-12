import React from 'react';
import './Caution.css';

function Caution() {
  return (
    <div className="caution-container">
      <h2 className="caution-title">CAUTION</h2>
      <h3 className="caution-subtitle">注意事項</h3>
      
      <div className="caution-section">
        <h4>ご来場者様へのお願い</h4>
        <ul>
          <li>アルコールの販売・持ち込み・飲酒は全面禁止です。（ノンアルコールも含む）</li>
          <li>喫煙される方は喫煙指定エリア（喫煙所）、をご利用ください（宮ノ上公園は除く）。</li>
          <li>実行委員会の許可のない物品の販売、チラシ等の配布は禁止です。</li>
          <li>ペット同伴でのご来場はご遠慮ください。（補助犬を伴ってのご入場は可能です。）</li>
          <li>その他、他のお客様の迷惑となる行為はご遠慮ください。</li>
          <li>迷惑行為等が見受けられた場合はご退場をお願いする場合がございます。</li>
          <li>使用教室以外の立ち入りは禁止です。</li>
        </ul>
      </div>
      
      <div className="caution-section">
        <h4>聖アンデレ広場噴水前特設ステージでのイベントについて</h4>
        <ul>
          <li>目の不自由な方の通行の妨げになるため、コーンブロックの上では立ち止まらないでください。</li>
          <li>ステージ周辺のコーンで囲まれたエリア内には立ち入らないでください。</li>
          <li>水には登らないでください。</li>
        </ul>
      </div>
      
      <div className="caution-section">
        <h4>カンタベリーホール内でのイベントについて</h4>
        <ul>
          <li>指定場所以外での撮影や、座席の上での立ち振る舞いなどは禁止です。</li>
          <li>カメラ、スマートフォン等の電子機器類による撮影・録音・録画はご遠慮ください。</li>
          <li>会場内での飲食、喫煙は禁止です。</li>
          <li>イベント中は携帯電話の電源をお切りください。</li>
        </ul>
      </div>
      
      <p>ご理解とご協力のほど、お願い申し上げます。</p>
    </div>
  );
}

export default Caution;