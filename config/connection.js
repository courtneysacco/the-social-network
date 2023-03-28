const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://courtney:Bailey14@social-network.lkacn6t.mongodb.net/test', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;