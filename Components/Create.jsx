import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');

  const sendData = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    try {
      await axios.post('https://678688b8f80b78923aa73c45.mockapi.io/api/yes/cake', {
        name: name,
        weight: weight,
      });
      alert('Order Placed Successfully');
      setName(''); // Reset the input fields
      setWeight('');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      <h1 style={styles.heading}>CAKES AND BAKES</h1>
      <div style={styles.card}>
        <form onSubmit={sendData} style={styles.form}>
          <input
            type="text"
            placeholder="Enter Cake Name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Enter Desired Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)} // Update weight state
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Place Order
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
      backgroundColor: '#fdf5e6', // Soft beige background
      height: '100vh', // Full page height
      fontFamily: "'Poppins', sans-serif",
    },
    heading: {
      color: '#ff6f61', // Vibrant pink color
      fontSize: '2.5rem',
      marginBottom: '20px',
      fontStyle: 'italic', // Make the font italic
      fontFamily: "'Dancing Script', cursive", // Apply a decorative font
    },
    card: {
      backgroundColor: 'white', // White card for contrast
      width: '400px',
      margin: '0 auto',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      marginBottom: '15px',
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ddd',
      boxShadow: 'inset 0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#ff6f61',
      color: 'white',
      cursor: 'pointer',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#e65b55',
    },
  };
  

export default Create;
