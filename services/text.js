const Text = require('../models/text');
const textModel = new Text();
const textDAO = require('../repositories/textRepository');

textModel.getCurrentUserTexts(function(err, result) {
    textDAO.getCurrentUserTexts(function(err, result){

    });
});

module.exports = text;