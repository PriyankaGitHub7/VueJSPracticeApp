const {Song} = require('../models')

module.exports = {
    async index(req, res) {
        try{
            const songs = await Song.findAll({
                limit : 10
            })
            res.send(songs)
        }catch(err){
            res.send({
                error : err
            })
        }
    },

    async create(req, res) {
        try{
            const song = await Song.create(req.body)
            res.send(song)
        }catch(err){
            res.send({
                error : err
            })
        }
    },

    async show(req, res) {
        try{
            const song = await Song.findById(req.params.songId)
            console.log(req.params.songId)
            res.send(song)
        }catch(err){
            res.send({
                error : err
            })
        }
    },

    async put(req, res) {
        try{
            const song = await Song.update(req.body, {
                where : {
                    id : req.params.songId
                }
            })
            console.log(req.params.songId)
            res.send(song)
        }catch(err){
            res.send({
                error : err
            })
        }
    }

}