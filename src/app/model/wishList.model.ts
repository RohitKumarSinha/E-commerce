export class WishListItem {
    productId: number;
    productName: string;
    imagePrimary: string;
    description: string;
    price: string;
    rating: string;

    constructor(productId: number, productName: string, imagePrimary: string,
        description: string, price: string, rating: string) {
        this.productId = productId || 0;
        this.productName = productName || 'No Name';
        this.imagePrimary = imagePrimary || '';
        this.description = description || '';
        this.price = price || '0';
        this.rating = rating || '';
    }
}
