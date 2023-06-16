import API from '@/api';
import { IProduct } from '@/types/entries/product';


class ProductService {
    static sampleItems = {
        fetch() {
            function raw() {
                return API.get<IProduct[]>('/api/products');
            }

            return {
                raw
            };
        }
    }
}

export default ProductService;