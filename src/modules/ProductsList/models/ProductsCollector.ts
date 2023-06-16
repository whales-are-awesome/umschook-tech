import { IProduct, IProductFull } from '@/types/entries/product';
import TeachersEndpoint from '@/api/teachers';
import SubjectsEndpoint from '@/api/subjects';
import ClassTypesEndpoint from '@/api/classTypes';

export default class ProductsCollector {
    static async collect(products: IProduct[]): Promise<IProductFull[]> {
        return Promise.all(products.map(async item => ({
            id: item.id,
            teacher: await (new TeachersEndpoint).find(item.teacher_id),
            subject: await (new SubjectsEndpoint()).find(item.subject_id),
            classType: await (new ClassTypesEndpoint()).find(item.class_type_id),
            description: item.description,
            price: item.price
        }) as IProductFull));
    }
}