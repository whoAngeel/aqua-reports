import boom, { unauthorized } from '@hapi/boom';
import { Strategy } from 'passport-local';
import { findByEmail } from '../../../services/user.service';
import { compare } from 'bcrypt';

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email: string, password: string, done) => {
    try {
        if (email === "" && password === "") done(boom.badData(), false)
        const user = await findByEmail(email)
        if (!user) done(unauthorized(), false)
        const isMatch = await compare(password, user.password)
        if (!isMatch) done(unauthorized(), false)
        done(null, user)
    } catch (error) {
        done(error, false)
    }
})
export default LocalStrategy