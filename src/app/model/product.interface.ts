export interface Product {
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
}
