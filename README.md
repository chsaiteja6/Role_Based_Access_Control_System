Role-Based Access Control System
Project Description
This project is a Role-Based Access Control (RBAC) System built using Node.js, Express, and MongoDB. It provides an application where users can register, log in, and interact with different resources based on their roles. The system defines access levels for different roles (such as admin, user and manager.) and ensures users can only perform actions within their authorized permissions.

Key Features
User Registration: Users can register with a username, password, and a role (admin, user, etc.).
User Authentication: Users can log in to the system using their credentials.
Role-Based Access: The system enforces different access levels for different roles, ensuring only authorized users can access specific resources.
Secure Passwords: Passwords are hashed and securely stored using bcrypt.
JSON Web Token (JWT): JWTs are used for authenticating users, providing secure sessions for the client-server communication.
Technologies Used
Node.js: Server-side JavaScript runtime environment.
Express: Web application framework for Node.js.
MongoDB: NoSQL database for storing user data and roles.
Mongoose: ODM (Object Data Modeling) library for MongoDB in Node.js.
bcryptjs: Library for securely hashing passwords.
jsonwebtoken (JWT): For creating and verifying tokens used for user authentication.
dotenv: For managing environment variables securely.
nodemon: Tool for automatically restarting the server during development.

Installation and Setup
1. Clone the Repository
To clone this project to your local machine:
Copy code
git clone https://github.com/your-username/your-repo-name.git
2. Install Dependencies
Navigate to the project directory and install the required dependencies:
cd your-repo-name
npm install
3. Setup Environment Variables
Create a .env file in the root of the project and add the following environment variables:
env
Copy code
CONNECTION=your-mongo-db-uri
JWT_SECRET=your-jwt-secret-key
Replace CONNECTION with the MongoDB URI for your database and your-jwt-secret-key with a secret key for signing JWTs.

4. Run the Application
To start the application, run:
npm run dev
The server will start, and you can access the API at http://localhost:7001

NOTE:please use Authorization in header with Bearer+jwt-token don't leave this empty

