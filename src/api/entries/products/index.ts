import wait from '@/helpers/wait';
import { IProduct } from '@/types/entries/product';
import data from './data';
import { IEndpoint } from '../types/endpoints';

export default class implements IEndpoint<IProduct> {
    async fetch(): Promise<IProduct[]> {
        await wait(200);

        return data;
    }

    async find(id: IProduct['id']): Promise<IProduct | undefined> {
        const result = await this.fetch();

        return result.find(item => item.id === id);
    }
}