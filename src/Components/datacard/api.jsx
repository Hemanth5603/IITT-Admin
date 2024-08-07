import React, { useState, useEffect } from "react";
import Card from '../../Components/datacard/card';
import './card.css'; 
import '../../Components/navbar/navbar.jsx'; 
import '../../Components/navbar/navbar.css';

const Api = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://13.60.93.136:8080/iitt-admin/fetch-data')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                return response.json();
            })
            .then(data => {
                setData(data.data);
                console.log(data.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleRemove = (id) => {
        setData((prevData) => prevData.filter(item => item.DataId !== id));
    };

    if (loading) {
        return <p>Loading...</p>;
    } 
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="main-content">
            <div className="container">
                {data.map((item) => (
                    <Card key={item.DataId} item={item} onRemove={handleRemove} />
                ))}
            </div>
        </div>
    );
};

export default Api;
