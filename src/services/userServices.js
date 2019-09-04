const userRep = require('../repositories/userRepository');

module.exports = {
    register: async (args) => {
        if (!args.email || !args.password) {
            throw new Error('Empty email or password', 401);
        }
        try {
            const user = await userRep.getUserBy({ email: args.email });

            if (user) {
                throw new Error('An account with this email already exists', 409);
            }

            args.password = Buffer.from(args.password).toString('Base64');

            return userRep.createUser(args);
        } catch (error) {
            throw error;
        }
    },

    login: async (email, password) => {
        if (!email || !password) {
            throw new Error('Empty email or password', 401);
        }
        try {
            const user = await userRep.getUserBy({ email });
            if (!user) {
                throw new Error('User not found', 401);
            }
            password = Buffer.from(password).toString('Base64');
            if (password != user.password) {
                throw new Error('Incorrect password', 401);
            }
            return user;
        } catch (error) {
            throw error;
        }
    },

    // fix&improve with authentication
    erase: async (email, password) => {
        if (!email || !password) {
            throw new Error('Empty email or password', 401);
        }
        try {
            const user = await userRep.getUserBy({ email });
            if (!user) {
                throw new Error('User not found', 401);
            }
            password = Buffer.from(password).toString('Base64');
            if (password != user.password) {
                throw new Error('Incorrect password', 401);
            }
            return deleteUser(user);
        } catch (error) {
            throw error;
        }
    }
}