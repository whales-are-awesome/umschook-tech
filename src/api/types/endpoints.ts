import hasId from '@/types/hasId';

type TEndpoints = '/api/products' | '/api/subjects' | '/api/teachers' | '/api/class-types';


interface IEndpoint<T extends hasId> {
    fetch: () => Promise<T[]>
    find: (id: T['id']) => Promise<T | undefined>
}

export {
    IEndpoint,
    TEndpoints
}