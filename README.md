## Description

A blog API using [NestJs](https://github.com/nestjs/nest) framework and [prisma ORM](https://github.com/prisma/prisma)  

## Installation

```bash
$ pnpm install
```

## Running the app

> Make sure to check the `.env.exmaple` file and create a `.env` file with the same variables and values

> Make sure to have a postgres database running on your machine

```bash
# development
$ npx prisma migrate dev
$ pnpm run start

# watch mode
$ npx prisma migrate dev
$ pnpm run start:dev

# production mode
$ npx prisma migrate deploy
$ pnpm run start:prod
```

#### After running the app You can check the API documentation on [http://localhost:3000/api](http://localhost:3000/api)

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

# API TODOs

* [x] **1. Project Setup**:
   * [x] 1.1 Set up a new Nest.js project using the Nest CLI or manually.
   * [x] 1.2 Configure your project to use a MySQL database with Prisma as the ORM.

* [x] **2. Create Models**:
   * [x] 2.1 Define your database models for articles and user accounts using Prisma. Include fields like title, content, publication date, and author for articles.

* [x] **3. User Authentication**:
   * [x] 3.1 Implement user authentication functionality.
   * [x] 3.2 Use JWT (JSON Web Tokens) for user authentication and create endpoints for user login.

* [x] **4. Article CRUD**:
   * [x] 4.1 Create API endpoints for creating, reading, updating, and deleting articles.
   * [ ] 4.2 Implement validation to ensure that only authorized users can modify or delete their own posts.

* [ ] **5. Listing Articles**:
   * [ ] 5.1 Create an endpoint to list all articles, including pagination and filtering options.
   * [ ] 5.2 Implement a feature to display the most recent posts on the homepage.
   * [ ] 5.3 Add sorting options for posts, such as sorting by date or popularity.
   * [ ] 5.4 Create an endpoint to list all comments for a specific article.
   * [ ] 5.5 Make only authenticated user can create a new article.
   * [ ] 5.6 Make only authenticated user can update or delete his own article.
   * [ ] 5.7 Make draft articles only visible to the author.

* [ ] **6. Comments**:
   * [ ] 6.1 Add a feature to allow users to leave comments on articles.
   * [ ] 6.2 Include endpoints for creating and retrieving comments.
   * [ ] 6.3 Implement validation to ensure that only authorized users can modify or delete their own comments.
   * [ ] 6.4 Add a feature to allow users to reply to comments.
   * [ ] 6.5 Close comments for draft articles.

* [ ] **7. Handle prisma exceptions**
  * [ ] 7.1 Handle prisma exceptions and return a proper error response
  * [ ] 7.2 Create a global exception filter to handle all exceptions
  * [ ] 7.3 Make sure that every route returns a proper error response with a readable message
  
* [ ] **8. Categories and Tags**:
   * [ ] 8.1 Implement a system for categorizing and tagging articles.
   * [ ] 8.2 Create endpoints for listing posts by category or tag.

* [ ] **9. Search Functionality**:
   * [ ] 9.1 Add a search functionality that allows users to search for specific articles based on keywords.

* [ ] **10. File Uploads**:
    * [ ] 10.1 Allow users to upload images to be used in their articles.
    * [ ] 10.2 Implement image upload and storage using a library like Multer.

* [ ] **11. Testing**:
    * [ ] 11.1 Write unit tests and integration tests for your controllers and services to ensure that your application functions correctly.