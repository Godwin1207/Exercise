// src/services/apiService.js
import axios from 'axios';

export const fetchRandomUsers = async (count = 3) => {
  try {
    const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
    return response.data.results.map(user => ({
      name: `${user.name.first} ${user.name.last}`,
      photo: user.picture.medium,
      location: `${user.location.city}, ${user.location.country}`,
      review: generateCustomReview()
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    // Kembalikan data manual jika API gagal
    return [
      {
        name: 'Sarah K.',
        photo: '/api/placeholder/100/100',
        review: 'Tahu bulat ini sungguh luar biasa! Renyah dan sangat lezat.'
      },
      {
        name: 'Budi R.',
        photo: '/api/placeholder/100/100',
        review: 'Harga terjangkau dengan kualitas yang premium. Recommended!'
      },
      {
        name: 'Ani W.',
        photo: '/api/placeholder/100/100',
        review: 'Tekstur tahu yang pas membuat saya ketagihan. Enak banget!'
      }
    ];
  }
};

const generateCustomReview = () => {
  const reviews = [
    'Tahu bulat ini sangat lezat dan renyah!',
    'Tekstur tahu yang pas membuat saya ketagihan.',
    'Harga terjangkau dengan kualitas yang premium.',
    'Recommended banget buat camilan sore!'
  ];
  return reviews[Math.floor(Math.random() * reviews.length)];
};