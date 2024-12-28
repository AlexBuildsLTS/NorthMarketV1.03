# NorthMarketV1.03
# NorthMarket - E-commerce Platform

NorthMarket is a modern e-commerce platform built with Spring Boot and React, featuring a clean, dark-themed UI and comprehensive marketplace functionality.

## Features

- 🛍️ **Marketplace Features**
  - Product listings with multiple images
  - Category-based browsing
  - Advanced search functionality
  - Rating system for products and sellers

- 👤 **User Management**
  - Role-based access control (Admin, Seller, Buyer)
  - User profiles with ratings
  - Secure authentication using JWT

- 💼 **Seller Dashboard**
  - Product management
  - Sales analytics
  - Performance metrics
  - Order management

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.2
- Spring Security with JWT
- MariaDB
- Maven

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Recharts for analytics

## Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- MariaDB 10.6+

### Backend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/northmarket.git
   cd northmarket/backend
   ```

2. Configure database
   ```sql
   CREATE DATABASE northmarket;
   CREATE USER 'northmarket'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON northmarket.* TO 'northmarket'@'localhost';
   ```

3. Configure application.properties
   ```properties
   spring.datasource.url=jdbc:mariadb://localhost:3306/northmarket
   spring.datasource.username=northmarket
   spring.datasource.password=your_password
   ```

4. Run the backend
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup
1. Navigate to frontend directory
   ```bash
   cd ../frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

## Project Structure

```
northmarket/
├── backend/
│   ├── src/main/
│   │   ├── java/com/northmarket/
│   │   │   ├── config/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   └── service/
│   │   └── resources/
│   └── pom.xml
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── contexts/
    │   ├── hooks/
    │   ├── pages/
    │   └── types/
    └── package.json
```

## API Documentation

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user

### Listings
- GET `/api/listings` - Get all listings
- POST `/api/listings` - Create new listing (Seller only)
- PUT `/api/listings/{id}` - Update listing (Seller only)

### Users
- GET `/api/users/profile` - Get current user profile
- PUT `/api/users/profile` - Update user profile
- POST `/api/users/{userId}/rate` - Rate a user

## Contributing


## License

This project is licensed under the MIT License - see the LICENSE file for details.
