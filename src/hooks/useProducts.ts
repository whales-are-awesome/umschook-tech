import { useFetchData } from '@/hooks/useFetchData';
import { IProduct } from '@/types/entries/product';
import ProductService from '@/services/ProductService';

function useProducts() {
    const products = useFetchData<IProduct[]>();

    async function fetchData() {
        const { data, error } = await ProductService.sampleItems.fetch().raw();

        products.value.pending = true;

        if (data) {
            products.value.data = data;
        } else {
            products.value.error = error;
        }

        products.value.pending = false;
    }

    fetchData();

    return [products, fetchData] as const;
}

export default useProducts;