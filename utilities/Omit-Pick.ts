// DTOs Es una abreviatura para referirnos a Data Transfer Objects u Objeto de Transferencias de datos. Hacen referencia a objetos de transferencia de datos

//?? Omit: Con omit podemos omitir las propiedades, campos o llaves que quieramos.
/*
    Omit: Omit<T, K>
    * Con esto generamos un nuevo tipo que tiene todas las propiedades de T excepto las especificadas en K
*/

interface UserTest {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
}

type UserWithoutContact = Omit<UserTest, 'email' | 'phoneNumber'>;

// `UserWithoutContact` es ahora un tipo con las propiedades `id` y `name`, pero sin `email` ni `phoneNumber`.

let user: UserWithoutContact = {
    id: 1,
    name: 'Carlos Araujo',
};

console.log(user);

//?? Pick: es lo contrario de Omit, aquí yo elijo los campos que quiero que estén en mi type o interface.
/*
    Pick: Pick<T, K>
    * Con esto producimos un nuevo tipo que solo tiene las propiedades de T que se especifican en K
*/