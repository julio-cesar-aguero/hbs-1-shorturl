console.log("hola frontend")
document.addEventListener('click', e =>{
    if(e.target.dataset.short){
        console.log("existe")
        console.log(e.target.dataset.short)
        const url = `http://localhost:5000/red/${e.target.dataset.short}`
        navigator.clipboard
           .writeText(url)
            .then(() => {
               console.log("Text copied to clipboard...")
            })
            .catch((error)=>{
                console.log("algo va mal"+error)
            })
    }
    
})