const placeslist = require("./../Components/places/api")

class ApiV1
{
    initialize(app){
        app.use("/api/places", placeslist);
        app.get("/", (req, res)=>{
            return res.send('It works');
    })
    }
}
module.exports = new ApiV1();
