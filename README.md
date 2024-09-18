# EthioMusic Documentation
## 1. Introduction
EthioMusic is a MERN stack website designed to let users listen to Ethiopian music. This guide will help you set up and run the project on your local machine.
## 2. Technologies Used
* React: A JavaScript library for building user interfaces.
* Tailwind CSS: A utility-first CSS framework for styling.
* Express: A web application framework for Node.js.
* MongoDB: A NoSQL database for storing music data.
* Firebase Storage and Authentication: Used for storing music files and handling user authentication.
* Postman: A tool for testing APIs.
* 
## 3. Prerequisites
Before you begin, ensure you have the following installed:

* Node.js (v14 or higher)
* MongoDB
* Git
* node
## 3. Installation
### 3.1 Clone the Repository
First, clone the repository to your local machine using Git:
git clone https://github.com/TeddyMeg/EthioMusic.git
cd EthioMusic
### 3.2 Install Dependencies
Navigate to the client and server directories and install the necessary dependencies using Yarn:
* Install server dependencies
cd server
npm install
* Install client dependencies
cd ../client
npm install
3. Set Up Environment Variables
Create a .env file in the server directory and add the following environment variables:
MONGO_URI=your_mongodb_connection_string
PORT=4000
Create a .env file in the client directory and add the following environment variables:
REACT_APP_FIREBASE_API_KEY = "YOUR_FIREBASE_API_KEY"
REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR_FIREBASE_AUTH_DOMAIN "
REACT_APP_FIREBASE_PROJECT_ID = "YOUR_FIREBASE_PROJECT_ID"
REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR_FIREBASE_STORAGE_BUCKET"
REACT_APP_FIREBASE_MESSAGING_ID = "YOUR_FIREBASE_MESSAGING_ID" 
REACT_APP_FIREBASE_APP_ID = "YOUR__FIREBASE_APP_ID"
You can get the above info from fire base after creating a web project on firebase. It's used for storage and authentication purposes. You also need to get the
serviceAccountKey.json from your firebase project and put it in the config directory under server.
## 4. Start the Development Servers
Start the server and client development servers:
* Start the server
cd server
npm run dev

* Start the client
cd ../client
npm start

The client will typically run on http://localhost:3000 and the server on http://localhost:4000.

## 5. Project Structure
### 5.1. Client
public/: Contains static files like images and the index.html file.
src/: Contains the main React application code.
components/: Reusable React components.
pages/: Different pages of the application.
App.js: Main application component.
index.js: Entry point of the React application.
### 5.2. Server
config/: Configuration files, including database connection.
controllers/: Functions to handle requests and responses.
models/: Mongoose models for MongoDB collections.
routes/: Express routes for different endpoints.
server.js: Entry point of the server application.
# 6. Usage
## 6.1. Adding, Updating and Deleting Music
You can use the web interface or the provided API endpoints to add, update, or delete music to the application. For example, to add a new song, send a POST request to http://localhost:4000/api/songs/save with the song details.

## 6.2. Playing Music
Users can browse and play music directly from the web interface. The application provides a user-friendly interface to navigate through different songs and playlists.

# 7. Interface
### 7.1. Login Page
![Login](https://github.com/user-attachments/assets/d8b8af75-4ea7-4caa-a601-4c9569c0d8ad)
### 7.2. Home Page
![Home Page](https://github.com/user-attachments/assets/c15d9e08-14de-4190-8aa2-5c38b706f414)
### 7.3. Dashboard Home Page
![Dashboard](https://github.com/user-attachments/assets/1c3ba0a7-f774-4faa-8588-ab8a2e6d2a38)
### 7.4. Dashboard Users Page
![Dashboard Users](https://github.com/user-attachments/assets/7f2c0649-38f7-4380-b42c-b48b1806f563)
### 7.5. Dashboard Songs Page
![Dashboard Songs](https://github.com/user-attachments/assets/0662eca7-3f2e-4211-9b68-e390e50ebf98)
### 7.6. Dashboard Artist Page
![Dashboard Artist](https://github.com/user-attachments/assets/248e77d4-880e-4163-b271-f1e4cdfffd0a)
### 7.7. Dashboard Albums Page
![Dashboard Albums](https://github.com/user-attachments/assets/39fd7a10-edde-4fb8-83bf-b07c346906d9)
### 7.8. Playing Songs
![Playing songs](https://github.com/user-attachments/assets/0513a693-5b75-4347-9c13-83352bbd2fb2)


