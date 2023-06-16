import { IClassType } from '@/types/entries/classType';

import data from './data';
import BaseEndpoint from '../BaseEndpoint';

export default class extends BaseEndpoint<IClassType> {
    constructor() {
        super(data);
    }
}