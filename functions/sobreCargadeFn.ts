
    // 1️⃣ Si le enviamos un array, nos debe unir cada elemento del array y devolver un string.
    // 2️⃣ Si le enviamos un string, nos debe separar cada caracter y formar un array como respuesta.
    // [N,i,c,o] => 'Nico' ... string[] => string 1️⃣
    // 'Nico' => [N,i,c,o] ... string => string[] 2️⃣


  function parseStr1(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
      return input.join(''); // string
    } else {
      return input.split(''); // string[]
    }
  }
  
  // Llamando a la función...
  const rptaArray = parseStr1('Nico'); // Entrada: string - Salida: Array
  console.log('rptaArray', 'Nico =>' ,rptaArray);
  
  const rptaStr = parseStr1(['N','i','c','o']); // Entrada: array - Salida: string
  console.log('rptaStr', "['N','i','c','o'] =>",rptaStr); 



// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------


// Sobrecarga de funciones 👇
function parseStr(input: string): string[]; // 👀
function parseStr(input: string[]): string; // 👀

function parseStr(input: unknown): unknown { // Función principal
    if (Array.isArray(input)) {
      return input.join(''); // string
    } else if (typeof input === 'string') {
      return input.split(''); // string[]
    }
}


const rptaStr2 = parseStr(['N','I','C','O']); // Retorna un string
// Usaremos un método propio del tipo de dato "string"
rptaStr2.toLowerCase(); // ✅ No necesitamos de la validación de datos para usar los métodos de este tipo de dato
console.log('rptaStr', "['N','i','c','o'] =>", rptaStr2);


const rptaArray2 = parseStr('Nico'); // Retorna un string[] (un array de elementos de tipo string)
// Usaremos un método propio del tipo de dato "string[]"
rptaArray2.reverse(); // ✅ No necesitamos de la validación de datos para usar los métodos de este tipo de dato
console.log('rptaArray', 'Nico =>', rptaArray2);
