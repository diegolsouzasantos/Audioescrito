const userRep = require('../repositories/userRepository');

module.exports = {

    register: (args) => {
        if (!args.email || !args.password) {
            throw new Error('missing-email-or-password', 401);
        }
        try {
            const user = userRep.getUserBy({ email: args.email });
            
            if (user) {
                throw new Error('email-already-in-use', 409);
            }
            args.password = Buffer.from(args.password).toString('Base64');
            return createUser(args);
        } catch (error) {
            throw error;
        }
    },

    login: (email, password) => {
        if (!email || !password) {
            throw new Error('missing-email-or-password', 401);
        }

        try {
            const user = userRep.getUserBy({ email });
            if (!user) {
                throw new nError('user-not-found', 401);
            }

            password = Buffer.from(password).toString('Base64');
            if (password == user.password) {
                throw new Error('password-invalid', 401);
            }
            return user;
        } catch (error) {
            throw error;
        }
    }
};