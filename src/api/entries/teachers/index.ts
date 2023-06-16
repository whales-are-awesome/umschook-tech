import wait from '@/helpers/wait';
import { ITeacher } from '@/types/entries/teacher';
import data from './data';
import { IEndpoint } from '../types/endpoints';

export default class implements IEndpoint<ITeacher> {
    async fetch(): Promise<ITeacher[]> {
        await wait(200);

        return data;
    }

    async find(id: ITeacher['id']): Promise<ITeacher | undefined>  {
        return data.find(item => item.id === id);
    }
}