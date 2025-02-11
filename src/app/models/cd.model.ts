export class CD {
    id!: number;
    title!: string;
    author!: string;
    price!: number;
    thumbnail!: string;
    releaseDate!: Date;
    quantity!: number;
    onsale?: boolean;
    constructor(
        id: number,
        title: string,
        author: string,
        price: number,
        thumbnail: string,
        releaseDate: Date,
        quantity: number,
        onsale?: boolean) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.thumbnail = thumbnail;
        this.releaseDate = releaseDate;
        this.quantity = quantity;
        if (onsale !== undefined) {
            this.onsale = onsale;
        }
    }
}