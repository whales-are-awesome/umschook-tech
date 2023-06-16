import { IProduct } from '@/types/entries/product';

import data from './data';
import BaseEndpoint from '../BaseEndpoint';

export default class extends BaseEndpoint<IProduct> {
    constructor() {
        super(data);
    }
}