import { Router } from 'express';
import { login, register, googleLogin, googleCallback } from '../controllers/auth.controller';
import passport from 'passport';



const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/login/google', passport.authenticate('google', {
    scope: ['email', 'profile'],
    session: false
}), googleLogin)
router.get('/login/google/callback', passport.authenticate('google'), googleCallback)

export default router