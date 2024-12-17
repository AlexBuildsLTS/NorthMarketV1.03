import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

const Listing = sequelize.define('Listing', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 100]
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0
    }
  },
  images: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  condition: {
    type: DataTypes.ENUM('New', 'Like New', 'Good', 'Fair', 'Poor'),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('available', 'sold', 'pending'),
    defaultValue: 'available'
  }
});

// Define relationships
Listing.belongsTo(User, { as: 'seller', foreignKey: 'sellerId' });
User.hasMany(Listing, { as: 'listings', foreignKey: 'sellerId' });

export default Listing;