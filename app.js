const express = require('express');
const app = express();

app.use(express.json()); // <--- This must be before your routes!

const postRoutes = require('./routes/postRoutes');
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));