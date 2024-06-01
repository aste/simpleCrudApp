# Simple CRUD App with Express and MongoDB

This repository contains a simple CRUD (Create, Read, Update, Delete) application built with Express.js and MongoDB.

## Features

- **Create**: Add new records to the database.
- **Read**: Retrieve and display records from the database.
- **Update**: Modify existing records in the database.
- **Delete**: Remove records from the database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB installed and running.
- Basic knowledge of JavaScript, Node.js, Express.js, and MongoDB.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/aste/simpleCrudApp.git
    ```
2. Navigate to the project directory:
    ```sh
    cd simpleCrudApp
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Create a `.env` file in the root of the project.

2. Add your MongoDB URI and port number to the `.env` file:
    ```env
    DATABASE_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
    PORT=3000
    ```

## Usage

1. Start the application:
    ```sh
    npm start
    ```
   Or if you are using nodemon for development:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Dependencies

The project relies on the following dependencies:
- `express`: ^4.19.2
- `body-parser`: ^1.20.2
- `ejs`: ^3.1.10
- `mongodb`: ^6.6.2

For development, the following devDependencies are used:
- `nodemon`: ^3.1.0

## Acknowledgements

- Zell Liew's CRUD Tutorial

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License. See the [LICENSE](LICENSE.txt) file for more details.
