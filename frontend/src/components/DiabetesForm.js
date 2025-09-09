import React, { useState } from "react";
import "./DiabetesForm.css";

const DiabetesForm = () => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigree: "",
    age: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPrediction(null);

    // Convert values to numbers and check for empty inputs
    const features = Object.values(formData).map((value) => {
      const num = parseFloat(value);
      return isNaN(num) ? 0 : num; // Default to 0 if input is empty
    });

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ features }),
      });

      if (!response.ok) {
        throw new Error("Invalid response from server");
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (err) {
      setError("Error connecting to the backend. Ensure Flask is running.");
    }
  };

  return (
    <div className="diabetes-container">
      <div className="diabetes-form-wrapper">
        <h2 className="diabetes-header">Diabetes Prediction Form</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div className="input-container" key={key}>
              <label>{key.replace(/([A-Z])/g, " $1").trim()}</label>
              <input
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit" className="submit-button">Predict</button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {prediction !== null && (
          <div className={`result-container ${prediction === 1 ? "high-risk" : "low-risk"}`}>
            <h3>Prediction: {prediction === 1 ? "High Risk" : "Low Risk"}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiabetesForm;
