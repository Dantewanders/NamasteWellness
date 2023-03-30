const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  // Check if the correct Auth Header is provided
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Invalid authentication header" });
  }

  // Get the JWT from the request headers
  const token = authHeader.split(" ")[1];

  // If there's no token, return an error
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify the JWT
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Add the user ID to the request object
    req.userId = decoded.id;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
