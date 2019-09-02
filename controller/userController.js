const userServices = require('../services/userServices');

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userServices.find(email, password);
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(error.status).json({
            name: error.name,
            message: error.message,
        });
    }
};

const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userServices.create(email, password);
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(error.status).json({
            name: error.name,
            message: error.message,
        });
    }
}

module.exports = userController;