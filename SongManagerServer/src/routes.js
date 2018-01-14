const AuthenticationController = require('./controllers/AuthenticationController.js')

const SongsController = require('./controllers/SongsController.js')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')

module.exports = (app) => {
    // First the Policy.register method is called and if the data is validated and next() is called 
    // the controller.register method will be called. 
    app.post('/register',AuthenticationControllerPolicy.register,AuthenticationController.register)

    app.post('/login',AuthenticationController.login)

    app.get('/songs',SongsController.index)

    app.post('/songs',SongsController.create)

    app.get('/songs/:songId',SongsController.show)

    app.post('/songs/:songId',SongsController.put)
}