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


## Project Structure



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

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.