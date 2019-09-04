const textServices = require('../services/textServices');
module.exports = {
    add: async (req, res) => {
        const args = {
            author: req.params.email,
            fileName: req.body.fileName,
            content: req.body.content,   
        }
        try {
            const text = await textServices.create(args);
            return res.status(200).json(text);
        } catch (error) {
            res.status(500).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    list: async (req, res) => {
        const args = req.params.email;
        try {
            const texts = await textServices.list(args);
            return res.status(200).json(texts);
        } catch (error) {
            res.status(500).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    getOne: async (req, res) => {
        const args = {
            author: req.params.email,
            fileName: req.params.fileName,
        }
        try {
            const text = await textServices.getText(args);
            return res.status(200).json(text);
        } catch (error) {
            res.status(500).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    erase: async (req, res) => {
        const args = {
            author: req.params.email,
            fileName: req.params.fileName,
        }
        try {
            await textServices.erase(args);
            return res.send('Text deleted!');
        } catch (error) {
            res.status(500).json({
                name: error.name,
                message: error.message,
            });
        }
    },

    update: async (req, res) => {
        const args = {
            author: req.params.email,
            fileName: req.query.fileName,
            content: req.query.content
        }
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

    // not implemented
    share: async (req, res) => {
        const args = req.query;
        try {
            const text = textServices.share(author, fileName, userList);
            return res.status(200).json(text);
        } catch (error) {
            res.status(error.status).json({
                name: error.name,
                message: error.message,
            });
        }
    }
}