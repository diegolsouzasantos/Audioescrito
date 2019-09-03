const mongoose = require('mongoose');
const { database } = require('../../config/servercfg');

module.exports = {
    connect: () => {
        try {
            let url;
            if (database.user && database.password && database.uri) {
                url = `${database.user}:${database.password}@${database.uri}`;
            } else {
                url = `${database.host}:${database.port}/${database.name}`;
            }

            mongoose.connect(`mongodb+srv://${url}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            
        } catch (error) {
            throw new Error(error);
        }
    },
};