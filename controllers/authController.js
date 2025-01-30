const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let users = []; // Mock user database

const register = (req, res) => {
    const { name, phone, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Create new user
    const newUser = { id: users.length + 1, name, phone, email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
};

// Login function
const login = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) return res.status(403).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};


module.exports = { register, login }; // Ensure this is correct
