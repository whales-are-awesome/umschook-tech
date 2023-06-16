import useFetchData from '@/hooks/useFetchData';
import ProductService from '@/services/ProductService';
import { IProductFull } from '@/models/entries/product';

function useProducts() {
    const products = useFetchData<IProductFull>();

    async function fetchData() {
        const { data, error } = await ProductService.sampleItems.fetch().raw();

        products.value.pending = true;

        if (!error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            products.value.data = data;
        } else {
            products.value.error = error;
        }

        products.value.pending = false;
    }

    fetchData();

    return products;
}

export default useProducts;