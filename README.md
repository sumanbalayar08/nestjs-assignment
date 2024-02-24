# Vehicle Management API

This repository contains a Nest.js application for managing vehicles. It provides endpoints for CRUD operations on vehicles, assigning drivers to vehicles, and adding maintenance tasks to vehicles.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (version 14.x or higher)
- npm (Node Package Manager) or yarn
- MongoDB (running locally or accessible remotely)

## Getting Started

Follow these steps to get the application up and running:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/sumanbalayar08/nestjs-assignment.git
   ```

2. Navigate to project directory
  
  ```
  cd nestjs-assignment
  ```

3. Install Dependencies
  npm install

4. Run Application

  ```
  npm run start:dev
  ```
  
# Usage

Once the application is running, you can interact with it using any API client or tools like Postman. The following endpoints are available:

```
POST /vehicles: Create a new vehicle.
GET /vehicles: Retrieve all vehicles.
GET /vehicles/{id}: Retrieve a specific vehicle by ID.
PUT /vehicles/{id}: Update a vehicle.
DELETE /vehicles/{id}: Delete a vehicle.
PUT /vehicles/{id}/assign-driver/{driverId}: Assign a driver to a vehicle.
PUT /vehicles/{id}/add-maintenance-task: Add a maintenance task to a vehicle.
Make sure to replace {id} and {driverId} with the actual ID values when making requests.
```