const userServices = require('../services/userServices');

module.exports = {
    register: async (req, res) => {
        const args = req.query;
        try {
            const user = await userServices.register(args);
            return res.status(200).json(user);
        } catch (error) {
            res.status(error.status).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    login: async (req, res) => {
        const { email, password } = req.query;
        try {
            const user = await userServices.login(email, password);
            return res.status(200).json(user);
        } catch (error) {
            res.status(error.status).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    erase: async (req, res) => {
        const { email , password } = req.query;
        try {
            await usersServices.deleteUser(email, password);
            res.status(200).json({
                message: 'User deleted',
            });
        } catch (error) {
            res.status(error.status).json({
                name: error.name,
                message: error.message,
            });;
        }
    }
}