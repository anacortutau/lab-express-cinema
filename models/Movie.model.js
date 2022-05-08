const { Schema, model } = require("mongoose");

const cinemaSchema = new Schema({

    title: {
        type: String,

    },
    director: {
        type: String
    },
    stars:{
        type: [String]
    },
    image:{
        type: String
    },

    description: {
        type: String
    },
    showtimes: {
        
       type: [String]
    },
    
})

const CinemaModel = model("cinema", cinemaSchema);

module.exports = CinemaModel;