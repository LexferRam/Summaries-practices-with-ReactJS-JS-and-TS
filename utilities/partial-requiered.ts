
//?? Partial type
interface User3 {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
}
  
  // Usando `Partial` para hacer todas las propiedades de User opcionales
  type PartialUser = Partial<User3>;

//?? Required type Required type: Required<T>
//* Esto genera un nuevo tipo que tiene todas las propiedades de T, pero cada atributo es obligatoria

interface User2 {
    id: number;
    name: string;
    email?: string;
    phoneNumber?: string;
}
  
  // Usando `Required` para hacer todas las propiedades de User obligatorias
  type RequiredUser = Required<User>;

