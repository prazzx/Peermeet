from sentence_transformers import SentenceTransformer, util
from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
model = SentenceTransformer('all-MiniLM-L6-v2')  # Lightweight and fast

client = MongoClient("mongodb+srv://karnaman:1234@cluster0ne.miuselj.mongodb.net/PeerMeet?retryWrites=true&w=majority&appName=Cluster0ne")
db = client['PeerMeet']
collection = db['users']

