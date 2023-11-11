import React from 'react';
import './ACCESS.css';

function ACCESS() {
    return (
        <div class="ACCESS">
            <div class="ACCESStitle">
                <h1 class="title">ACCESS</h1>
                <p class="ACCESSparagragh">アクセス</p>
            </div>
            <div class="ACCESScontents">
                <div class="ACCESSindex1">
                    <div class="TrafficAccess">
                        <h2 class="TrafficAccessIndex1">交通アクセス</h2>
                    </div>
                    <div class="ACCESSindex1Text">
                        <p>大学ＨＰ<a href="https://www.andrew.ac.jp/access/">「交通アクセス」</a>でご確認ください。</p>
                        <p>なお、駐車場はありませんので公共交通機関をご利用ください。</p>
                    </div>
                </div>
                <div class="ACCESSindex2">
                    <div class="CaupusMap">
                        <h2 class="CaupusMapIndex2">キャンパスマップ</h2>
                    </div>
                    <div class="ACCESSindex2Text">
                        <p>大学ＨＰ<a href="https://www.andrew.ac.jp/info/campusmap.html">「キャンパスマップ」</a>でご確認ください。</p>
                        <p>キャンパスの詳細を確認することができます。</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ACCESS;