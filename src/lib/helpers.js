const helpers = {};
const bcryp = require('bcryptjs');
const passport = require('passport');

helpers.encryptPassword = async (password) =>{
    const salt = await bcryp.genSalt(10);
    const hash = await bcryp.hash(password, salt);
    return hash;
};

helpers.matchPassword = async (password, savePassword) =>{
    try {
        return await bcryp.compare(password, savePassword);
    } catch (error) {
        console.log(error);
    }
}

module.exports = helpers;