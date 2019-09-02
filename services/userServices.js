const userRep = require('../repositories/userRepository');

const find = async (email, password) => {
    if (!email || !password) {
        throw new Error('missing-email-or-password', 401);
    }

    try {
        const user = getUser(email, password);
        if (!user) {
            throw new Error('user-not-found', 401);
        } else {
            return user;
        }
    } catch (err) {
        throw err;
    }
};

const create = async (email, password) => {
    if (!email || !password) {
        throw new Error('missing-email-or-password', 401);
    }
    try {
        const user = createUser(email, password);
        if (!user) {
            throw new Error('user-not-found', 401);
        } else {
            return user;
        }
    } catch (err) {
        throw err;
    }
};

module.exports = textServices;
