import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();// Get the order ID from URL params
  console.log(id,"Fetched")
  const navigate = useNavigate(); // To navigate back after update
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');

  // Fetch the existing order details
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await axios.get(`https://678688b8f80b78923aa73c45.mockapi.io/api/yes/cake/${id}`);
        setName(res.data.name);
        setWeight(res.data.weight);
      } catch (error) {
        console.error('Error fetching order details:', error);
        alert('Failed to fetch order details.');
      }
    };
    fetchOrderDetails();
  }, [id]);

  // Handle form submission to update the order
  const sendData = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://678688b8f80b78923aa73c45.mockapi.io/api/yes/cake/${id}`, {
        name,
        weight,
      });
      alert('Order updated successfully!');
      navigate('/read'); // Navigate back to the Read page
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Failed to update order. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>CAKES AND BAKES</h1>
      <h2 style={styles.subheading}>Update Order</h2>
      <div style={styles.card}>
        <form onSubmit={sendData} style={styles.form}>
          <input
            type="text"
            placeholder="Enter Cake Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Enter Desired Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Update Order
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f9f9f9',
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    color: '#ff6f61',
    marginBottom: '20px',
    fontSize: '2.5rem',
  },
  subheading: {
    color: '#ff6f61',
    marginBottom: '20px',
    fontSize: '1.5rem',
  },
  card: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#ff6f61',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Update;
