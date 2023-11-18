import React from "react";
import './MapMockStore.jsx';
import './MapMockStoreModal.css';

const ModalMockStoreModal = (props) => {
    const closeModal = () => {
        props.setShowModal(false);

    };
    return (
    <>
    {props.showFlag ? ( 
    <div>
        <div id="overlay"></div>
            <div id="modalContent">
                <p>「帰ってきて良かった…強い子に会えて…」</p> {/*仮置きテキスト♠ */}
                <button onClick={closeModal}>Close</button>
            </div>
    </div>
        ) : (
        <></>// showFlagがfalseの場合はModalは何も表示しないわヨ
            )}

        </>
);
};

export default ModalMockStoreModal;