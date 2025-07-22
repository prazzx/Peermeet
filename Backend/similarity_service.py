import numpy as np
from flask import Flask, request, jsonify
from sentence_transformers import SentenceTransformer  # or whatever model you're using

app = Flask(__name__)

# Load your model (adjust this based on what you're using)
model = SentenceTransformer('all-MiniLM-L6-v2')  # or your model

@app.route('/embed', methods=['POST'])
def get_embedding():
    data = request.json
    interests = data['interests']
    
    if not interests:
        return jsonify({"error": "No interests provided"}), 400
    
    try:
        # Generate embeddings
        embeddings = model.encode(interests)
        
        # Handle single vs multiple interests
        if len(embeddings.shape) == 1:
            # Single interest case
            combined_embedding = embeddings
        else:
            # Multiple interests - average them
            combined_embedding = np.mean(embeddings, axis=0)
        
        # Convert to list for JSON
        embedding_list = combined_embedding.tolist()
        
        print(f"Processed {len(interests)} interests into embedding of length {len(embedding_list)}")
        
        return jsonify({"embedding": embedding_list})
        
    except Exception as e:
        print(f"Error generating embedding: {e}")
        return jsonify({"error": "Failed to generate embedding"}), 500

if __name__ == '__main__':
    app.run(host='localhost', port=6000, debug=True)