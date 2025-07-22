// embedUtils.js
const fetch = require('node-fetch');

const getInterestEmbedding = async (interestsArray) => {
  try {
    const res = await fetch('http://localhost:6000/embed', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ interests: interestsArray })
    });

    if (!res.ok) throw new Error('Failed to fetch embedding');

    const embedding = await res.json(); // should be a 384-dim vector
    return embedding;
  } catch (err) {
    console.error('Embedding fetch error:', err);
    return null;
  }
};

module.exports = { getInterestEmbedding };
