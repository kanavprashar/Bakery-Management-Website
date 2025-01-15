import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Read = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // Fetch data from API
  const getData = async () => {
    try {
      const res = await axios.get('https://678688b8f80b78923aa73c45.mockapi.io/api/yes/cake');
      setOrders(res.data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error); // Log errors
    }
  };

  // Delete an order by ID
  const deleteOrder = async (id) => {
    try {
      await axios.delete(`https://678688b8f80b78923aa73c45.mockapi.io/api/yes/cake/${id}`);
      alert('Order deleted successfully!');
      getData(); // Refresh the data after deletion
    } catch (error) {
      console.error('Error deleting order:', error); // Log errors
      alert('Failed to delete order. Please try again later.');
    }
  };

  useEffect(() => {
    getData(); // Fetch data when component mounts
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Cake Orders</h1>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableHeaderCell}>Order Id</th>
            <th style={styles.tableHeaderCell}>Cake</th>
            <th style={styles.tableHeaderCell}>Weight</th>
            <th style={styles.tableHeaderCell}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr
                key={order.id}
                style={index % 2 === 0 ? styles.tableRow : styles.tableRowAlt}
              >
                <td style={styles.tableCell}>{order.id}</td>
                <td style={styles.tableCell}>{order.name}</td>
                <td style={styles.tableCell}>{order.weight}</td>
                <td style={styles.tableCell}>
                  <button
                    style={styles.editButton}
                    onClick={() => {
                      navigate(`/update/${order.id}`); // Fixed interpolation
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.deleteButton}
                    onClick={() => deleteOrder(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={styles.noDataCell}>
                No orders available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    fontFamily: "'Playfair Display', serif", // Stylish font applied globally
  },
  heading: {
    color: '#ff6f61',
    marginBottom: '30px',
    fontSize: '2.5rem',
    fontFamily: "'Playfair Display', serif", // Stylish font for the heading
  },
  table: {
    width: '80%',
    margin: '0 auto',
    borderCollapse: 'collapse',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  tableHeader: {
    backgroundColor: '#ff6f61',
    color: 'white',
    fontFamily: "'Playfair Display', serif", // Stylish font for headers
  },
  tableHeaderCell: {
    padding: '15px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: '1px solid #ddd',
    fontFamily: "'Playfair Display', serif", // Stylish font for headers
  },
  tableRow: {
    backgroundColor: 'white',
  },
  tableRowAlt: {
    backgroundColor: '#ffe7e4',
  },
  tableCell: {
    padding: '15px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    fontFamily: "'Playfair Display', serif", // Stylish font for cells
  },
  noDataCell: {
    textAlign: 'center',
    padding: '20px',
    fontSize: '1rem',
    color: '#666',
    fontFamily: "'Playfair Display', serif", // Stylish font for no-data message
  },
  editButton: {
    padding: '5px 10px',
    marginRight: '5px',
    border: 'none',
    backgroundColor: '#6fcf97',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: "'Playfair Display', serif", // Stylish font for buttons
  },
  deleteButton: {
    padding: '5px 10px',
    border: 'none',
    backgroundColor: '#eb5757',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: "'Playfair Display', serif", // Stylish font for buttons
  },
};

export default Read;
