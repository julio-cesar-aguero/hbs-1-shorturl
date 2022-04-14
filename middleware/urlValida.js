const { URL } = require("url");
const urlValidar = (req, res , next ) =>{
    try {
        const { origin } = req.body;
        const urlFrontend = new URL(origin);
        if(urlFrontend.origin !== "null"){
            return next();
        }else{
            throw new Error("No validad");
        }
    } catch (error) {
        console.log("No valida")
        return res.redirect("/home")
    }
}
module.exports = urlValidar;