import React from 'react';
import './MapMockStore.css';
import MapMockStoreModal from "./MapMockStoreModal.jsx"; 
import { useState } from "react"; 

function MapMockStore() {   
        const [showModal, setShowModal] = useState(false); 
        const [active, setActive] = useState(false);
        const ShowModal = () => {
            setShowModal(true);
            setActive(!active)
        };
    return (
    <div class="Mock-store">
        <div class="Mock-store-map">
            <button class={active ? "Mock-store-pin-clicked" : "Mock-store-pin"} onClick= { ShowModal}></button>
            <div class="Map-image">
            <img src="Haman-Karn.jpg" alt="仮置きハマーン"></img>{/*画像が手に入ったら差し替え*/}
            </div>
        </div>
    <MapMockStoreModal showFlag={showModal} setShowModal={setShowModal}/>
</div>
);
}

export default MapMockStore;