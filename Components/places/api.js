const express = require('express');
const placesRouter = express.Router();
const placesService = require("./service");

placesRouter.get('/', (req, res) => {
    let lat = req.query.latitude ;
    let long = req.query.longitude ;
        if (! req.query.latitude || !req.query.longitude){
    return res.send('enter latitude or longitude');
    }
    let result = [];
    placesService.getlist().then(data => {
      for (let i = 0; i < data.length; ++i) {
        if ((lat - data[i].latitude < 0.001 || data[i].latitude - lat < 0,001)
        && (long - data[i].longitude > 0.001 || data[i].longitude - long > 0.001 )) {
          result.push(data[i]);
        }
      }
        return res.send(result);
    });

});
placesRouter.post('/', (req, res) => {
    let places ={
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude

    }
    console.log('coordinates == ', places);
    placesService.insertlist(places).then(data => {
        return res.send(data);
    });
});
placesRouter.delete('/:_id', (req, res) => {
    let id  = req.params._id
    placesService.deletelist(id).then(data => {
        return res.send(data);
    });
});

module.exports = placesRouter;
