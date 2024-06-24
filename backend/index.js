require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const chatbotRoutes = require('./routes/chatBotRoutes');
const configRoutes = require('./routes/configRoutes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use('/api', chatbotRoutes);
app.use('/api/config', configRoutes);

app.get('/', (req, res) => {
  res.send('Chatbot Server is Running');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
