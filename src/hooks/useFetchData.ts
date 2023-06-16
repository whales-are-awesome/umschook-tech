import { ref, Ref } from 'vue';
import { IFetchData, IFetchDataFullyLoaded } from '@/types/fetch';

function useFetchData<T>(): Ref<IFetchData<T>> {
    const data: T | null = null;

    return ref({
        data,
        pending: true,
        error: null
    });
}

function useFetchDataFullyLoaded<T>(): Ref<IFetchDataFullyLoaded<T>> {
    const data: T | null = null;

    return ref({
        data,
        pending: true,
        error: null,
        fullyLoaded: false
    });
}


export {
    useFetchData,
    useFetchDataFullyLoaded
};