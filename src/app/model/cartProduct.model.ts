export class CartProductItem {
    productId: number;
    productName: string;
    imagePrimaery: string;
    description: string;
    price: string;
    discount: string;
    discountedPrice: string;
    color: string;
    size: string;
    quantity: number;
    currenrcySymbol: string;
    deliveryDate: string;

    constructor(productId: number, productName: string, imagePrimaery: string,
        description: string, price: string, discount: string,
        discountedPrice: string, color: string, size: string, 
        quantity: number, currenrcySymbol: string, deliveryDate: string) {
        this.productId = productId || 0;
        this.productName = productName || 'No Name';
        this.imagePrimaery = imagePrimaery || '';
        this.description = description || '';
        this.price = price || '0';
        this.discount = discount || '0';
        this.discountedPrice = discountedPrice || '0';
        this.color = color || '';
        this.size = size || '';
        this.quantity = quantity || 0;
        this.currenrcySymbol = currenrcySymbol || '$';
        this.deliveryDate = deliveryDate || '';
    }
}
