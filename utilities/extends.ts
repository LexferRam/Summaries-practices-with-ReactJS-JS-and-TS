interface IBaseModel {
    id: string;
    createdAt: Date;
    updatedAt: Date
}

interface User extends IBaseModel {
    name: string;
    lastName: string;
    age: number;
}

const LexUser: User = {
    id: '123',
    name: 'Lexfer',
    lastName: 'Ramirez',
    age: 28,
    createdAt: new Date(),
    updatedAt: new Date()
}