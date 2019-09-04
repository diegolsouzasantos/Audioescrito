const mongoose = require('mongoose');
const servercfg = require('../../config/servercfg');

module.exports = {
    connect: async () => {
        try {
            let url = servercfg.database.url;

            mongoose.connect(('mongodb+srv://' + url), {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

        } catch (error) {
            throw new Error(error);
        }
    },
}