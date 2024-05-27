const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://hagllerll:1HsuFPmWYfclJAFt@cluster5.tlnqsgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/api/notes', require('./routes/notes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));