# NodeJS Video Management API

This is a simple Node.js project for managing videos using a Fastify server and an in-memory database.

## Features

- **Create Videos**: Add new videos with title, description, and URL.
- **List Videos**: Retrieve a list of videos, with optional search functionality.
- **Update Videos**: Update video details by ID.
- **Delete Videos**: Remove videos by ID.

## Project Structure
.env # Environment variables (currently empty) database-memory.js # In-memory database implementation db.js # Placeholder for database logic (currently empty) package.json # Project metadata and dependencies routes.http # HTTP routes for testing the API server.js # Fastify server implementation

## Usage
Start the Server
For production:
npm start
For development:
npm run dev

The server will start on http://localhost:3333.

## API Endpoints

## Create a Video
- **POST /videos**
Content-Type: application/json

{
    "title": "my video",
    "description": "My video description",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

## List Videos
- **GET /videos**
- **GET /videos?search=< based on the video title >**

## Update a Video
- **PUT /videos/:id**
Content-Type: application/json

{
    "title": "Updated title",
    "description": "Updated description",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

## Delete a Video
- **DELETE /videos/:id**

## Testing the API
You can use the routes.http file to test the API endpoints. Open the file in Visual Studio Code and use an HTTP client extension (e.g., REST Client) to execute the requests.

## Dependencies
- **fastify:** Web framework for Node.js.
- **postgres:** PostgreSQL client (not yet used in the project).
- **dotenv:** For managing environment variables.

## Future Improvements
- **Implement a PostgreSQL database connection in db.js.**
- **Add unit tests for the API.**
- **Enhance error handling and validation.**
