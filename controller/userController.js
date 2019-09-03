const userServices = require('../services/userServices');

module.exports = {

    register: (req, res) => {
        const args = req.body;
        try {
            const user = userServices.register(args);
            
            console.log('///entrou7///');
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({
                errors: [error],
            });
        }
    },

    login: (req, res) => {
        const { email, password } = req.body;
        try {
            const user = userServices.login(email, password);
            return res.send(user);
        } catch (error) {
            return res.status(500).json({
                errors: [error],
            });
        }
    },
}