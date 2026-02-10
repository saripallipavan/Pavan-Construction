require('dotenv').config();
console.log('ENV DEBUG:');
console.log('PORT:', process.env.PORT);
console.log('URI:', process.env.MONGO_URI ? process.env.MONGO_URI.substring(0, 20) + '...' : 'UNDEFINED');
