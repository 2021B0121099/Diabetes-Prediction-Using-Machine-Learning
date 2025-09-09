# Diabetes Prediction Using Machine Learning
This project is a Diabetes Prediction System that combines Machine Learning models with a web application for an interactive user experience.
The goal is to help users estimate their risk of diabetes based on medical parameters such as glucose level, BMI, age, and more.

## Features
1. Machine Learning models trained on medical dataset
2. Google Colab notebook for preprocessing, feature selection, and model comparison
3. MERN Stack Web App with user-friendly interface
4. API integration connecting ML model with frontend

## Machine Learning Models Used

1. Logistic Regression

2. Random Forest

3. Support Vector Machine (SVM)

4. K-Nearest Neighbors (KNN)

5. Decision Tree

6. LGBM

## Metrics used
Accuracy, Precision, Recall, F1-score, AUC-ROC

## Dataset
The dataset contains medical attributes such as:Pregnancies, Plasma Glucose, Diastolic Blood Pressure, Triceps Thickness, Serum Insulin, BMI, Diabetes Pedigree Function, Age.

## Installation & Setup
I. Clone the Repository
   git clone https://github.com/2021B0121099/Diabetes-Prediction-Using-Machine-Learning.git
   cd Diabetes-Prediction-Using-Machine-Learning

II. Backend Setup (Flask)
   1.	Install Python:
      •	Ensure you have Python installed. If not, download and install it from python.org.
   2.	Install Dependencies:
      •	Navigate to the backend directory in your terminal: cd path/to/your/backend
      •	Install the necessary Python libraries using pip: pip install -r requirements.txt
   3.	This will install all the required dependencies for the backend, including:
      •	Flask
      •	pickle
      •	pandas
      •	numpy
      •	scikit-learn
      •	other relevant libraries

III. Frontend Setup (React)
     1.	Install Node.js:
        •	Ensure you have Node.js installed. If not, download and install it from nodejs.org.
     2.	Install Dependencies:
        •	Navigate to the frontend directory in your terminal: cd path/to/your/frontend
        •	Install the required dependencies using npm: npm install
     3.	This will install all the required libraries for the frontend, including React and other dependencies specified in package.json.

IV.  Running the Application
    1. Start the Backend (Flask)
       cd backend
       python app.py
    2. Start the Frontend (React)
       cd frontend
       npm start

## Future Enhancements
1.Deploy on cloud (Heroku/AWS)

2. Improve UI/UX design

3. Explore deep learning models (ANN, LSTM)

4. Integration with wearable device data
