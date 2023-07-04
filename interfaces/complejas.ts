(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress?(id: string): void
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Lexfer',
        age: 28,
        address: {
            id: 123,
            zip: 'DFR 12',
            city: 'Otawa',
        },
        getFullAddress(id: string){
            return this.address.city
        }
    }


})()