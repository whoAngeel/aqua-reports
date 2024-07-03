import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config } from '../../../config/config';
import { findOrCreate } from '../../../services/user.service';
import { badGateway } from '@hapi/boom';
import { IUser } from '../../../interfaces/user.type';

const OAuthStrategy = new GoogleStrategy(
    {
        clientID: config.google_client_id,
        clientSecret: config.google_client_secret,
        callbackURL: "http://localhost:4000/auth/login/google/callback", /// NOTE: change this when deploy
    }, async function (accesstoken: any, refreshToken: any, profile: any, done: any) {
        try {
            const email = profile.emails[0].value
            console.log(email)
            let userdata:Partial<IUser> = {
                email,
                fullname: profile.displayName,
                role: 'reporter',
            }
            const user = await findOrCreate(userdata)
            if (!user) return done(badGateway(), false)
            return done(null, user)
        } catch (error) {
            return done(error, false)
        }
    }
)

export default OAuthStrategy