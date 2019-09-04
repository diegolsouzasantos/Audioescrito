const textRep = require('../repositories/textRepository');

module.exports = {
    create: async (args) => {
        try {
            const text = await textRep.getTextBy({ author: args.author, fileName: args.fileName });
            if (text) {
                throw new Error('You already have a text file with that name!');
            }
            return textRep.createText(args);
        } catch (error) {
            throw error;
        }
    },

    list: async (args) => {
        try {
            const texts = await textRep.getTextsBy({ author: args.author });
            if (!texts) {
                throw new Error('Text not found');
            }
            return texts;
        } catch (error) {
            throw error;
        }
    },

    getText: async (args) => {
        try {
            const text = await textRep.getTextBy({ author: args.author, fileName: args.fileName });
            if (!text) {
                throw new Error('Text not found');
            }
            return text;
        } catch (error) {
            throw error;
        }
    },

    erase: async (args) => {
        try {
            const text = await textRep.deleteText({ author: args.author, fileName: args.fileName });
            if (!text) {
                throw new Error('Text not found');
            }
            return text;
        } catch (error) {
            throw error;
        }
    }
}