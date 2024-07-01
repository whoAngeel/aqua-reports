import {Strategy, ExtractJwt} from 'passport-jwt';
import { config } from '../../../config/config';

const options ={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
}

const JwtStrategy = new Strategy(options, (payload, done) => {
    return done(null, payload)
})

export default JwtStrategy