import React , {useState, useEffect} from "react";
import Card from './card';

const Api = () =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('http://13.60.93.136:8080/iitt-admin/fetch-data')
            .then(response => {
                if(!response.ok){
                    throw new Error("Something went wrong");
                }
                return response.json();
            })
            .then(data => {
                setData(data.data);
                setLoading(false);
            })
            .catch(error =>{
                setError(error);
                setLoading(false);
            });
    },[]);

    if (loading){
        return <p>Loading...</p>;
    } 
    if(error){
        return <p>Error: {error.message}</p>
    }

    return (
    <div style={styles.container}>
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );

};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default Api;