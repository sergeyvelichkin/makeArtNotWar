const authController = require('../controllers/authcontroller.js');



module.exports = (app, passport) => {
    app.get('/', isLoggedIn, authController.dashboard);
    app.get('/logout', authController.logout);
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',

        failureRedirect: '/signup'
    }

    ));
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/',

        failureRedirect: '/signin'
    }

    ));
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

}