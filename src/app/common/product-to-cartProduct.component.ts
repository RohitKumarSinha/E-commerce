import { ProductItem } from '../model/product.model';
import { CartProductItem } from '../model/cartProduct.model';
import { CartProduct } from '../model/cartProduct.interface';

export class ProductToCartProduct{
    
    public setCartProductModel(product:ProductItem, size: string, color: string, quantity: number){       
        return new CartProductItem(product.productId, product.productName, product.imageUrl[0],
            product.description, product.price, product.discount, product.discountedPrice, color,
            size, quantity, product.currenrcySymbol,'');
    }
}