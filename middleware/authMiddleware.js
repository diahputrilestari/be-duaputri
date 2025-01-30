const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        console.log('No token provided');
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('Token verification failed:', err);
            return res.sendStatus(403); // Forbidden
        }
        req.user = user; // Attach user info to request
        next(); // Proceed to the next middleware or route handler
    });
};
