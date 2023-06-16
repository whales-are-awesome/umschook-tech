import { TEndpoints } from '@/api/types/endpoints';
import ProductsEndpoint from '@/api/entries/products';
import ClassTypesEndpoint from '@/api/entries/classTypes';
import SubjectsEndpoint from '@/api/entries/subjects';
import TeachersEndpoint from '@/api/entries/teachers';

export default class EndpointsHandler {
    static async getData(endpoint: TEndpoints, id?: number): Promise<unknown> {
        // сделал не делал масштабируемо на параметры, времени займет много
        // по-хорошему, конечно, для айдишников свой эндпоинт делать надо

        switch (endpoint) {
            case '/api/products':
                return id === undefined
                    ? await (new ProductsEndpoint).fetch()
                    : await (new ProductsEndpoint).find(id!);
            case '/api/class-types':
                return id === undefined
                    ? await (new ClassTypesEndpoint).fetch()
                    : await (new ClassTypesEndpoint).find(id!);
            case '/api/subjects':
                return id === undefined
                    ? await (new SubjectsEndpoint).fetch()
                    : await (new SubjectsEndpoint).find(id!);
            case '/api/teachers':
                return id === undefined
                    ? await (new TeachersEndpoint).fetch()
                    : await (new TeachersEndpoint).find(id!);
            default:
                throw new Error('No such endpoint');
        }
    }
}