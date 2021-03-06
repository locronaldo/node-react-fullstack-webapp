const passport = require('passport')

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }
    ))
    
    app.get('/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/')
        }
    )

    app.get('/api/logout', (req, res) => {
        req.logout()
        res.send(req.user) // no longer have use, got an empty screen
        // res.send({ message: "Goodbye!" })
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })

    app.get('/', (req, res) => {
        res.send({ hi: "everyone" })
    })
}

