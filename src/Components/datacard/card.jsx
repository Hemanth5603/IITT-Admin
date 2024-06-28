import React from "react";


const Card = ({item}) =>{
    const imageUrl = `https://iittnif-bucket.s3.eu-north-1.amazonaws.com${item.Image}`;
    console.log(item.image);
    return (
        <div style={styles.card}>
            <img src={imageUrl} alt="Image" style={styles.image} />
            <div styles={styles.details}>
                <p><strong>Category:</strong> {item.Category}</p>
                <p><strong>Time:</strong> {item.Time}</p>
                <p><strong>Date:</strong> {new Date(item.Date).toLocaleDateString()}</p>
                <p><strong>Address:</strong> {item.Address}</p>
            </div>
        
        </div>
    )
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    margin: '10px',
    padding: '10px',
    maxWidth: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  details: {
    marginTop: '10px',
  },
};

export default Card;