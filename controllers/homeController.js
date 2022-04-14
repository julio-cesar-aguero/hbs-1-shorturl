const { nanoid } = require('nanoid')
const Url = require('../models/Url')
const leerUrls =  async (req, res)=>{
    try{
        const urls = await Url.find().lean()
        res.render("home", { urls: urls})
    }catch(error){
        console.log(error)
        res.send('Falló algo...')

    }
}
const agregarUrl = async(req, res)=>{
    //console.log(req.body);
    const {origin} = req.body;
    try{
        const url = new Url({origin: origin, shortURL: nanoid(8)})
        await url.save()
        res.redirect("/")
    } catch (error) {
        res.send('Algo fallo')
    }
}
const eliminarUrl = async(req, res)=>{
    const {id} = req.params;
    try {
        await Url.findByIdAndDelete(id)
        console.log("eliminar");
        res.redirect("/")
    } catch (error) {
        res.send('Algo fallo')
    }
}
const editarUrlForm = async (req, res)=>{
    const {id} = req.params
    try {
        const url = await Url.findById(id).lean()
        res.render('home',{url})
    } catch (error) {
        console.log(error);
        res.send("error algo falló")
    }
}
const editarUrl = async (req, res)=>{
    const {id} = req.params
    const {origin} = req.body
    try {
        const urls = await Url.find().lean()
        await Url.findByIdAndUpdate(id, {origin: origin})
        res.render('home',{urls})
    } catch (error) {
        console.log(error);
        res.send("error algo falló")
    }
}
const redirect = async (req, res)=> {
    console.log("redirect")
    const {shortURL} = req.params
    console.log(shortURL)
    try {
        const urlDB = await Url.findOne({shortURL: shortURL})
        res.redirect(urlDB.origin)
    } catch (error) {
        
    }

}
module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrlForm,
    editarUrl,
    redirect,
}