# Healthcare Service API

This project provides a simple API for managing healthcare services using Node.js, Express, and MongoDB. You can create, update, retrieve, and delete healthcare services.

## Features
- **Add a new service**: Create new healthcare services with name, description, and price.
- **Get all services**: Retrieve a list of all available services.
- **Update a service**: Modify the details of an existing service.
- **Delete a service**: Remove a service from the list.

## Technologies
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Postman (for testing)
  
---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (you can use MongoDB Atlas for cloud database)
- [Postman](https://www.postman.com/downloads/) (for API testing)
  
---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/healthcare-service-api.git
cd healthcare-service-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory and add your MongoDB connection string:

```bash
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```

If you don't have a MongoDB connection string, you can use MongoDB Atlas to create a free cluster and get the connection string.

### 4. Start the Application

To run the applicatoin locally, execute the following command

```bash
npm start
```

If you're using nodemon for development (auto-restart server on changes):

```bash
npm run dev
```

## Testing with Postman

### 1. Get yourself postman 

You can download postman from [this](https://www.postman.com/downloads/) website then login.

### 2. Create a new collection

Create a new collection by clicking a '+' sign at the top corner with any name like "HealthService-API's"

### 3. Add Requests

- Add a POST request to create a service.
- Add a GET request to retrieve a service.
- Add a PUT request to update a service.
- Add a DELETE request to delete a service.

### 4. Testing

Set the base url to http://localhost:3000/api/services/ and test the api's.