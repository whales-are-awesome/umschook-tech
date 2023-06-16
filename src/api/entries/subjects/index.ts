import wait from '@/helpers/wait';
import { ISubject } from '@/types/entries/subject';
import data from './data';
import { IEndpoint } from '../types/endpoints';

export default class implements IEndpoint<ISubject> {
    async fetch(): Promise<ISubject[]> {
        await wait(200);

        return data;
    }

    async find(id: ISubject['id']): Promise<ISubject | undefined>  {
        return data.find(item => item.id === id);
    }
}