index: async (req, res) => {
    const users = await userServices.find();
        let user = req.body;
    return res.json(users);
}

module.exports = userController;