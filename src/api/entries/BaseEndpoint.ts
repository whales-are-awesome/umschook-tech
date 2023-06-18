import { IEndpoint } from '../types/endpoints';
import hasId from '@/types/hasId';
import wait from '@/helpers/wait';

export default abstract class BaseEndpoint<T extends hasId> implements IEndpoint<T> {
    protected constructor(public data:T[] = [] ) {
    }

    async fetch(): Promise<T[]> {
        await wait(200);

        return this.data;
    }

    async find(id: T['id']): Promise<T | undefined>  {
        return this.data.find(item => item.id === id);
    }
}