const express = require('express');
const router = express.Router();

const CinemaModel = require("../models/Movie.model.js")

const movieDetails = new CinemaModel()



/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res,next)=>{


    CinemaModel.find().select("title").select("image")
    .then((movie)=>{
        //console.log(response)
        res.render("movies.hbs", {
            moviesArr: movie

        })
    })

    .catch((err)=>{
        console.log(err)
    })


})


router.get("/movies/:movieId", async (req, res, next)=>{

    //1. obtener el id del pokemon que el usuario quiere visualizar
    const { movieId } = req.params

    try{

       //2. buscar el pokemon en la bbdd (Promesa con async await)
    const movies = await CinemaModel.findById(movieId)

    console.log(movies)

    //3. renderizar una vista al usuario con el pokemon.
    res.render("movie.hbs",{
      movieDetails: movies

    })
    
    } catch(err){
      console.log(err)
    }


   


})



module.exports = router;
