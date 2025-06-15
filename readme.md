# Credit Engine API

This is a Node.js REST API built with Express and MySQL for managing users, their referral-based signup system, and credit history.

## Features

* User registration with referral code support
* Credit point system for signups and referrals
* Retrieve user credit history and total credits
* Fully tested using Jest and Supertest

## Installation

1. Clone the repository:

```bash
   git clone <your-repo-url>
```

2. Install dependencies:

```bash
   npm install
```

3. Set up your `.env` file with the following:

```env
DB_HOST=your-database-host
DB_PORT=3306
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=your-db-name
CA_CERTIFICATE=your-ca-cert
```

4. Start the server:

```bash
   npm run dev
```

---

## API Endpoints

### POST `/api/create`

Registers a new user with optional referral code.

#### Request Payload

```json
{
  "username": "sudip",
  "email": "new2@example.com",
  "password": "123",
  "refferalCode": "dfgvhbjk"  // optional but rewarded
}
```

#### Responses

* **200 OK**: User created successfully

```json
{
  "message": "User Created Sucessfuly"
}
```

* **500 Error**:

  * Username already exists:

  ```json
  {
    "message": "username already exist"
  }
  ```

  * Email already exists:

  ```json
  {
    "message": "email already exist"
  }
  ```

  * Database or logic error:

  ```json
  {
    "message": "something went wrong"
  }
  ```

### GET `/api/user/:username`

Fetches the total credit and credit history of a user.

#### Response

* **200 OK**:

```json
{
  "totalCredit": 12,
  "history": [
    {
      "credit_point": 2,
      "credit_action": "signup",
      "transaction_date": "2025-06-14"
    }
  ]
}
```

* **500 Error**:

```json
{
  "message": "user not exist" | "something went wrong"
}
```

---

## Testing

Run tests using:

```bash
npm test
```

Test files:

* `userCreation.test.js`: Tests for user creation endpoint
* `creditHistory.test.js`: Tests for user credit history endpoint

---

## Project Structure

```
src/
├── Config/
│   └── db.js            # MySQL connection
├── Routes/
│   └── api.js           # API route handlers
├── app.js               # Express configuration
├── index.js             # Entry point
├── Tests/
│   ├── userCreation.test.js
│   └── creditHistory.test.js
```

---
