import React from 'react';
import './MapMockStore.css';

function MapMockStore() {    
    
    return (
    <div class="Mock-store">
        <div class="Mock-store-map">
            <span class="Mock-store-pin js-modal-button"></span>
            <div class="Map-image">
            <img src="Haman-Karn.jpg" alt="仮置きハマーン"></img>{/*画像が手に入ったら差し替え*/}
            </div>
        </div>
        <div class ="greyout-layer js-modal">
            <div class ="modal">
                <div class="modal-inner">
                    <div class ="modal-contents">
                        <p id="modal-text">
                        ハマーン・カーン
                        </p>
                    </div>
                </div>
                </div>
    </div>
    
</div>
);
}

export default MapMockStore;