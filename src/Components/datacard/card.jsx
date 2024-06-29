import React, { useState } from "react";
import './card.css';

const Card = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imageUrl = `https://iittnif-bucket.s3.eu-north-1.amazonaws.com${item.Image}`;

    const handleAccept = () => {
        // Implement the logic for accepting
        console.log(`Accepted ${item.Category}`);
    };

    const handleReject = () => {
        // Implement the logic for rejecting
        console.log(`Rejected ${item.Category}`);
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="card">
            <div className="image-container">
                <img src={imageUrl} alt="Image" className="image" onClick={handleImageClick} />
            </div>
            <div className="details">
                <p><strong>Category:</strong> {item.Category}</p>
                <p><strong>Time:</strong> {item.Time}</p>
                <p><strong>Date:</strong> {new Date(item.Date).toLocaleDateString()}</p>
                <p><strong>Address:</strong> {item.Address}</p>
            </div>
            <div className="button-container">
                <button className="button accept" onClick={handleAccept}>Accept</button>
                <button className="button reject" onClick={handleReject}>Reject</button>
            </div>
            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={imageUrl} alt="Full Image" className="modal-image" />
                        <button className="close-button" onClick={handleCloseModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
