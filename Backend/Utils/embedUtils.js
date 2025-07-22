const fetch = require('node-fetch');

const getInterestEmbedding = async (interestsArray) => {
  try {
    const res = await fetch('http://localhost:6000/embed', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ interests: interestsArray }),
    });

    if (!res.ok) throw new Error('Failed to fetch embedding');

    const response = await res.json();
    console.log('✅ Embedding received successfully');
    console.log('Type:', typeof response.embedding);
    console.log('Is array:', Array.isArray(response.embedding));
    console.log('Length:', response.embedding?.length);
    
    return response.embedding;
  } catch (err) {
    console.error('Embedding fetch error:', err);
    return null;
  }
};


module.exports = { getInterestEmbedding };
