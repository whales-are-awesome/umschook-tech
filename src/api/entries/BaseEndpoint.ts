import { IEndpoint } from '@/api/types/endpoints';
import { IClassType } from '@/types/entries/classType';
import wait from '@/helpers/wait';
import data from '@/api/entries/classTypes/data';

export default abstract class implements IEndpoint<T> {
    async fetch(): Promise<T[]> {
        await wait(200);

        return data;
    }

    async find(id: T['id']): Promise<T | undefined>  {
        return data.find(item => item.id === id);
    }
}