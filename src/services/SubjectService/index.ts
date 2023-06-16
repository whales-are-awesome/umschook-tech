import API from '@/api';


class ProductService {
    static sampleItems = {
        fetch() {
            function raw() {
                return API.get('/api/products');
            }

            return {
                raw
            };
        }
    }
}

export default ProductService;