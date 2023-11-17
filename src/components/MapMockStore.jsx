import React from 'react';
import './MapMockStore.css';

function MapMockStore() {    
    
    return (
    <div class="Mock-store">
        <div class="Mock-store-map">
            <span class="dli-pin-fill js-modal-button"></span>
            <div class="Map-image">
            <img src="Haman-Karn.jpg" alt="仮置きハマーン"></img>
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