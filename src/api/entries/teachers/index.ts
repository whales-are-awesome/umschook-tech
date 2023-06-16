import { ITeacher } from '@/types/entries/teacher';

import data from './data';
import BaseEndpoint from '../BaseEndpoint';

export default class extends BaseEndpoint<ITeacher> {
    constructor() {
        super(data);
    }
}