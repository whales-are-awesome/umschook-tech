import wait from '@/helpers/wait';
import { IClassType } from '@/types/entries/classType';
import data from './data';
import { IEndpoint } from '../types/endpoints';

export default class implements IEndpoint<IClassType> {
    async fetch(): Promise<IClassType[]> {
        await wait(200);

        return data;
    }

    async find(id: IClassType['id']): Promise<IClassType | undefined>  {
        return data.find(item => item.id === id);
    }
}