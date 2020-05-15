import { Product } from './product.interface';

export class ProductItem {
    productId: number;
    productName: string;
    categoryId: number;
    categoryName: string;
    imageUrl: string[];
    description: string;
    price: string;
    discount: string;
    discountedPrice: string;
    offerLabel: string;
    rating: string;
    color: string[];
    size: string[];
    quantity: number;
    currenrcySymbol: string;

        constructor(product:Product){    
        this.productId = product.productId || 0;
        this.productName = product.productName || 'No Name';
        this.categoryId = product.categoryId || 0;
        this.categoryName = product.categoryName || '';
        this.imageUrl = product.imageUrl || [];
        this.description = product.description || '';
        this.price = product.price || '0';
        this.discount = product.discount || '0';
        this.discountedPrice = product.discountedPrice || '0';
        this.offerLabel = product.offerLabel || '';
        this.rating = product.rating || '0';
        this.color = product.color || [];
        this.size = product.size || [];
        this.quantity = product.quantity || 0;
        this.currenrcySymbol = product.currenrcySymbol || '$';
    }
}
