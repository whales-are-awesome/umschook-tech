import { ISubject } from '@/types/entries/subject';
import data from './data';
import BaseEndpoint from '../BaseEndpoint';

export default class extends BaseEndpoint<ISubject> {
    constructor() {
        super(data);
    }
}