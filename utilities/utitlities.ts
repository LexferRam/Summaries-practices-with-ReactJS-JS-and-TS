interface Product {
    readonly id: string | number;
    title: string;
    readonly description: string;
}

const product1: Product = {
    id: 1234,
    title: 'Product1',
    description: 'Product1 description'
}

//la propiedad "readonly" evita que haya una modificacion en la propiedad
// product1.id = 3452 
