from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS to allow frontend requests

# Load the trained model
model_path = r"C:\Users\shwet\OneDrive\Desktop\FINAL YR PROJECT\8th SEM\best_model.pkl"
with open(model_path, "rb") as file:
    model = pickle.load(file)

# ✅ Add this default route to avoid "404 Not Found"
@app.route("/")
def home():
    return "Flask Backend is Running! 🚀"

# Prediction route
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json  # Get JSON data from frontend
        features = np.array(data["features"]).reshape(1, -1)  # Convert to array
        prediction = model.predict(features)[0]  # Make prediction
        return jsonify({"prediction": int(prediction)})
    except Exception as e:
        return jsonify({"error": str(e)}), 400  # Return error if any

if __name__ == "__main__":
    app.run(debug=True)
