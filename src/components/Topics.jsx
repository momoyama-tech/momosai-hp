import React from 'react';
import './Topics.css'; // CSSファイルをインポート
import { useNavigate } from 'react-router-dom';

function Topics() {
    const navigate = useNavigate();

    // ページ移動用の関数
    const onClickPage1 = () => {
        navigate('/topic-page-1'); // トピック1へのパス
    };
    const onClickPage2 = () => {
        navigate('/topic-page-2'); // トピック2へのパス
    };
    const onClickPage3 = () => {
        navigate('/topic-page-3'); // トピック3へのパス
    };

    return (
        <div className="topics-container">
            <h2 className="topics-title">桃山祭のハイライト</h2>
            
            <div className="topics-items">
                <div className="topic-item" onClick={onClickPage1}>
                    <img src="tech-img02.png" alt="桃山祭でのプロジェクションマッピングショーの様子" />
                    <h3 className="topic-subtitle">桃山祭プロジェクションマッピング</h3>
                    <p>幻想的な光のアートでキャンパスを彩るプロジェクションマッピングショー。</p>
                </div>

                <div className="topic-item" onClick={onClickPage2}>
                    <img src="techsai2.png" alt="桃山祭でのデジタルアクアリウム展示" />
                    <h3 className="topic-subtitle">桃山祭テックデジタルアクアリウム</h3>
                    <p>桃山祭でデジタル技術で創り出された海底世界を体験できるアトラクション。</p>
                </div>

                <div className="topic-item" onClick={onClickPage3}>
                    <img src="techsai4.png" alt="桃山祭限定ホットサンドメニュー" />
                    <h3 className="topic-subtitle">桃山祭テック部のホットサンド</h3>
                    <p>桃山祭限定テック部特製のホットサンドで、美味しいひと時を。</p>
                </div>

                <div className="topic-item" onClick={onClickPage3}>
                    <img src="2023.png" alt="桃山祭限定ホットサンドの写真" />
                    <h3 className="topic-subtitle">桃山祭テック部のホットサンドメニュー</h3>
                    <p>ホットサンドメニュー、桃山祭で最高の時間を。</p>
                </div>

                <div className="topic-item" onClick={onClickPage3}>
                    <img src="tech08.png" alt="桃山祭IT" />
                    <h3 className="topic-subtitle">桃山祭IT</h3>
                    <p>桃山祭で最先端のITをテック部が披露。</p>
                </div>

                <div className="topic-item" onClick={onClickPage3}>
                    <img src="momonga01.png" alt="桃山祭ももんが" />
                    <h3 className="topic-subtitle">桃山祭ももんが</h3>
                    <p>ももんが桃山祭にて参上</p>
                </div>

         
            </div>
        </div>
    );
}

export default Topics;
