const textServices = require('../services/textServices');
module.exports = {
    create: async (req, res) => {
        const args = req.query;
        try {
            const text = await textServices.create(args);
            return res.status(200).json(text);
        } catch (error) {
            res.status(error.status).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    list: async (req, res) => {
        const author = req.query;
        try {
            const texts = await textServices.list(author);
            return res.send(texts);
        } catch (error) {
            res.status(error.status).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    get: async (req, res) => {
        const { author, fileName } = req.query;
        try {
            const text = await textServices.get(author, fileName);
            return res.send(text);
        } catch (error) {
            res.status(error.status).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    erase: async (req, res) => {
        const { author, fileName } = req.query;
        try {
            await textServices.erase(author, fileName);
            return res.send('Text deleted!');
        } catch (error) {
            res.status(error.status).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    update: async (req, res) => {
        const args = req.query;
        try {
            const text = textServices.update(args);
            return res.status(200).json(text);
        } catch (error) {
            res.status(error.status).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    share: async (req, res) => {
        const { author, fileName, userList } = req.query;
        try {
            const text = textServices.share(author, fileName, userList);
            return res.send(text);
        } catch (error) {
            res.status(error.status).json({
                name: error.name,
                message: error.message,
            });
        }
    }
}