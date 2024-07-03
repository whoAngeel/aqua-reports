import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config } from '../../../config/config';
import { findOrCreate } from '../../../services/user.service';

const OAuthStrategy = new GoogleStrategy(
    {
        clientID: config.google_client_id,
        clientSecret: config.google_client_secret,
        callbackURL: "http://localhost:4000/auth/login/google/callback", /// NOTE: change this when deploy
    }, async function (accesstoken: any, refreshToken: any, profile: any, done: any) {
        const email = profile.emails[0].value
        const user = await findOrCreate(email, profile)

        return done(null, user)
    }
)

export default OAuthStrategy