const Payload = {
async postPayload(req, res){
    if(!rule){
        return res.status(400).json({
            "message": "rule is required.",
            "status": "error",
            "data": null
        });
    };

    if(!data){
        return res.satus(400).json({
            "message": "data is required.",
            "status": "error",
            "data": null
        })
    }
}


}