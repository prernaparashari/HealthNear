const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();

// ✅ Middleware (VERY IMPORTANT)
app.use(express.json());

// ================== MONGODB CONNECTION ==================
mongoose.connect("mongodb://prerna:prerna123@ac-yrzlypx-shard-00-00.f2nje9v.mongodb.net:27017,ac-yrzlypx-shard-00-01.f2nje9v.mongodb.net:27017,ac-yrzlypx-shard-00-02.f2nje9v.mongodb.net:27017/medinearby?ssl=true&replicaSet=atlas-sslirp-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

// ================== USER MODEL ==================
const User = require('./models/user');

// ================== TEST ROUTE ==================
app.get('/', (req, res) => {
    res.send("API working 🚀");
});

// ================== REGISTER API ==================
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists ❌" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.json({ message: "User registered ✅" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// ================== LOGIN API ==================
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // check user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found ❌" });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password ❌" });
        }

        res.json({ message: "Login successful ✅" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// ================== SERVER ==================
app.listen(5000, () => {
    console.log("Server running on port 5000 🚀");
});