const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;
const URL = "mongodb+srv://mythilymuthu:mythu123@cluster0.g0mryfy.mongodb.net/ecommerce_shop?retryWrites=true&w=majority"

// Connect to MongoDB
mongoose.connect(URL, {

    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

// Middleware
app.use(express.json());

// Start server
app.listen(PORT, () => {
    console.log(`Server runs successfully at port ${PORT}`);
});




