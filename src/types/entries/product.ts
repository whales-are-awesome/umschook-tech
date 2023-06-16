import { TCurrency } from '@/types/currency';
import { ITeacher } from './teacher';
import { ISubject } from './subject';
import { IClassType } from './classType';

interface IProduct {
    id: number,
    teacher_id: ITeacher['id'],
    subject_id: ISubject['id'],
    class_type_id: IClassType['id'],
    description: string
    price: {
        amount: number,
        currency: TCurrency
    }
}


interface IProductFull extends Omit<IProduct, 'teacher_id' | 'subject_id' | 'class_type_id'> {
    teacher: ITeacher
    subject: ISubject
    classType: IClassType
}

export {
    IProduct,
    IProductFull
}