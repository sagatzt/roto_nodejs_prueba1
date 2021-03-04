const bcrypt = require('bcrypt')

module.exports= class Mensaje{

    constructor(mensaje){
        this.mensaje=mensaje
        this.texto=mensaje
        this.longitud=mensaje.length
    }

    getCountMays(){
        let count=0
        for(let i=0;i<this.longitud;i++){
            if(this.mensaje[i]=='Mays') count++
        }
        return count
    }

    async encriptar(){
        await bcrypt.hash(this.texto, 6)
        .then(hash=>{
            this.texto = hash
        })
    }

}