import { ref, Ref } from 'vue';
import { IFetchData } from '@/types/fetch';

function useFetchData<T>(): Ref<IFetchData<T>> {
    const data: T | null = null;

    return ref({
        data,
        pending: true,
        error: null
    });
}

export {
    useFetchData
};