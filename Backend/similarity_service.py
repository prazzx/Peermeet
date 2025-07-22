from sentence_transformers import SentenceTransformer, util
from flask import Flask, request, jsonify

app = Flask(__name__)
model = SentenceTransformer('all-MiniLM-L6-v2')

@app.route('/embed', methods=['POST'])
def embed():
    data = request.json
    sentences = data.get("interests", [])
    embeddings = model.encode([" ".join(sentences)], convert_to_tensor=True)
    return jsonify(embeddings.tolist())

if __name__ == '__main__':
    app.run(port=6000)
