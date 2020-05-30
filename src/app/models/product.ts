export class Product {
    id: number;
    name: string;
    description: string;
    categorie: number;
    price: number;
    imageUrl: string;


    constructor(id, name, description = '',categorie, price = 0, imageUrl = 'https://image.flaticon.com/icons/svg/2553/2553537.svg'){
        this.id = id
        this.name = name
        this.description = description
        this.categorie = categorie
        this.price = price
        this.imageUrl = imageUrl
    }
}
