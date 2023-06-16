import { IClassType } from '@/types/entries/classType'
import { ISubject } from '@/types/entries/subject'
import { IProduct } from '@/types/entries/product';

import ClassTypesFilter from './ClassTypesFilter';
import SubjectsFilter from './SubjectsFilter';

export default class Handler {
    items: IProduct[];
    classTypeId?: IClassType['id']
    subjectId?: ISubject['id']

    constructor(items: IProduct[], classTypeId?: IClassType['id'], subjectId?: ISubject['id']) {
        this.items = [...items];
        this.classTypeId = classTypeId;
        this.subjectId = subjectId;
    }

    handleAll() {
        if (this.classTypeId || this.classTypeId === 0) {
            this.items = new ClassTypesFilter().filter(this.items, this.classTypeId);
        }

        if (this.subjectId || this.subjectId === 0) {
            this.items = new SubjectsFilter().filter(this.items, this.subjectId);
        }

        return this.items;
    }
}