

const Controller = {
    getMyDetails(req, res){
        res.status(200).json({
            "message": "My Rule-Validation API.",
            "status" : "success",
            "data": {
                "name" : "Wasiu Shina ABDULMALEEK",
                "github": "@shina1",
                "email": "oswasiu@gmail.com",
                "mobile" : "09031217041",
                "twitter" : "@localJSdev"
            }
        })
    }


};

module.exports = Controller;