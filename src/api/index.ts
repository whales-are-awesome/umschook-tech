import { TEndpoints } from './types/endpoints';
import EndpointsHandler from './models/EndpointHandler';

class API {
    static async get<T>(endpoint: TEndpoints, id?: number) {
        let data = null;
        let error = null;

        try {
            data = await EndpointsHandler.getData(endpoint, id) as T;
        } catch (e) {
            error = e as Error;
        }
        return {
            data,
            error
        }
    }
}

export default API;