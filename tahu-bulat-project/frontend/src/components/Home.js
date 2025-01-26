import React, { useState, useEffect } from 'react';
import { fetchRandomUsers } from '../services/apiService';

function Home() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      const randomUsers = await fetchRandomUsers();
      setReviews(randomUsers);
    };
    loadReviews();
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1> Tahu Bulat Spesial </h1>
        <p>Renyah, Lezat, dan Menggugah Selera!</p>
      </header>

      <div style={styles.productSection}>
        <div style={styles.productCard}>
          <img 
            src="https://img-global.cpcdn.com/recipes/Recipe_2014_12_06_16_59_58_45_bd92f66e3375ba174b75/680x482cq70/tahu-bulat-ala-abang-abang-foto-resep-utama.jpg" 
            alt="Tahu Bulat Original" 
            style={styles.productImage}
          />
          <h2>Tahu Bulat Original</h2>
          <p>Rp. 10.000/porsi</p>
          <button style={styles.button}>Pesan Sekarang</button>
        </div>
        <div style={styles.productCard}>
          <img 
            src="https://cdn.yummy.co.id/content-images/images/20191222/Zhc3OJqIWZiOYxahG5vu7djS9bLQ1Ev3-31353734333937313538d41d8cd98f00b204e9800998ecf8427e.jpg?x-oss-process=image/resize,w_388,h_388,m_fixed,x-oss-process=image/format,webp" 
            alt="Tahu Bulat Pedas" 
            style={styles.productImage}
          />
          <h2>Tahu Bulat Pedas</h2>
          <p>Rp. 12.000/porsi</p>
          <button style={styles.button}>Pesan Sekarang</button>
        </div>
      </div>

      <div style={styles.reviewsSection}>
        <h2>Apa Kata Pelanggan</h2>
        <div style={styles.reviewCards}>
          {reviews.map((review, index) => (
            <div key={index} style={styles.reviewCard}>
              <img 
                src={review.photo} 
                alt={review.name} 
                style={styles.reviewerImage}
              />
              <h3>{review.name}</h3>
              <p>"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FF6B6B',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    width: '100%',
  },
  productSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '20px 0',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '20px',
    textAlign: 'center',
    width: '250px',
  },
  productImage: {
    maxWidth: '200px',
    borderRadius: '10px',
  },
  button: {
    backgroundColor: '#FF6B6B',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  reviewsSection: {
    backgroundColor: '#F9D5E5',
    padding: '20px',
    textAlign: 'center',
    width: '100%',
  },
  reviewCards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  reviewCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '15px',
    width: '250px',
  },
  reviewerImage: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
};

export default Home;