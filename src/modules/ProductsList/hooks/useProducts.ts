import { useFetchDataFullyLoaded } from '@/hooks/useFetchData';
import ProductService from '@/services/ProductService';
import ProductsCollector from '../models/ProductsCollector';
import { IProductFull, IProduct } from '@/types/entries/product';

function useProducts() {
    const products = useFetchDataFullyLoaded<IProduct[] | IProductFull[]>();

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

    async function fetchAndCollectData() {
        await fetchData();

        // можно без таймаута, но так просто наглядней
        setTimeout(() => {
            collectData();
        }, 1000);
    }

    async function collectData() {
        products.value.data = await ProductsCollector.collect(products.value.data as IProduct[]);
        products.value.fullyLoaded = true;
    }

    fetchAndCollectData();

    return products;
}

export default useProducts;