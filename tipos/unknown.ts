(() => {

    // Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos pero sin apagar por completo el análisis de código estático. Unknown nos fuerza a hacer una verificación de tipo.

    // desactiva TS y cualquier análisis de sugerencias de metodos
    let anyVar: any; 


    let unknownVar: unknown; 

    // el type unknown permite tener la flexibilidad de any
    // y puede tomar un tipo de dato específico si se realiza una validacion respectiva, ya que el tipo de dato "unknown" obliga hacer esta verificacion de da tipo
    if(typeof unknownVar === 'string'){
        unknownVar.toUpperCase()
    }

    if(typeof unknownVar === 'number'){
        unknownVar.toFixed(2)
    }


})()