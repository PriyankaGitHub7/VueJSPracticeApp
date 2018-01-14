// This acts as a middle ware between the UI and back-end
// This file validates the requests using Joi package
// and sends them to the main methods if the request is valid. 

const Joi = require('joi')

module.exports = {
    register(req,res,next){
        // Ask about if this can be put in the model itself
        const schema = {
            email : Joi.string().email(),
            password : Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)

        if(error) {
            switch(error.details[0].context.key){
                case 'email' :
                    res.status(400).send({ // refactor this
                        error : 'You must provide a valid email address'
                    })
                case 'password' : 
                    res.status(400).send({ // refactor this to put the send method call in a different method
                        error : 'Please provide a valid password'
                    })
                default:
                res.status(400).send({ // refactor this to put the send method call in a different method
                    error : 'Invalid registration information'
                })
            }
        }
        else{
            next()
        }
    }
}