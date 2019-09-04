const textRep = require('../repositories/textRepository');

module.exports = {
    create: async (args) => {
        try {
            const text = await textRep.getTextBy({ author: args.author, fileName: args.fileName });
            if (text) {
                throw new Error('You already have a text file with that name!', 409);
            }
            return createText(args);
        } catch (error) {
            throw error;
        }
    },

    get: async (author, fileName) => {
        try {
            const text = await textRep.getTextBy({ author: author, fileName: fileName });
            if (!text) {
                throw new Error('Text not found', 401);
            }
            return text;
        } catch (error) {
            throw error;
        }
    },

    erase: async (author, fileName) => {
        try {
            const text = await textRep.findOneAndRemove({ author: author, fileName: fileName });
            if (!text) {
                throw new Error('Text not found', 401);
            }
            return text;
        } catch (error) {
            throw error;
        }
    }
}