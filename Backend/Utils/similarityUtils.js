const tf = require('@tensorflow/tfjs-node');

// Returns a cosine similarity between two arrays
const cosineSimilarity = (vecA, vecB) => {
  const a = tf.tensor1d(vecA);
  const b = tf.tensor1d(vecB);
  const dot = tf.dot(a, b).dataSync()[0];
  const normA = tf.norm(a).dataSync()[0];
  const normB = tf.norm(b).dataSync()[0];
  return dot / (normA * normB);
};

module.exports = { cosineSimilarity };
