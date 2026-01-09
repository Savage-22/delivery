import * as userService from '../services/user.service.js';

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        // Basic validation - require either cpf or email
        if (!email || !password)
            return res.status(400).json({ error: "Email and password are required" });

        // Find user by email
        let user;
        if (email) {
            user = await userService.getUserByEmail(email);
        }

        if (!user)
            return res.status(401).json({ error: "Invalid email" });

        // Compare password
        if (user.password_user !== password)
            return res.status(401).json({ error: "Invalid password" });

        // Respond with success
        return res.status(200).json({
            message: "Login successful",
            user: {
                ...user,
                password: undefined
            },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
}