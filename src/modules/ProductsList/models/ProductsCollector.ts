import { IProduct, IProductFull } from '@/types/entries/product';
import TeacherService from '@/services/TeacherService';
import SubjectService from '@/services/SubjectService';
import ClassTypeService from '@/services/ClassTypeService';

export default class ProductsCollector {
    static async collect(products: IProduct[]): Promise<IProductFull[]> {
        return Promise.all(products.map(async item => {
            const { data: teacher } = await TeacherService.sample.fetch(item.teacher_id).raw();
            const { data: subject } = await SubjectService.sample.fetch(item.subject_id).raw();
            const { data: classType } = await ClassTypeService.sample.fetch(item.class_type_id).raw();

            return {
                id: item.id,
                teacher,
                subject,
                classType,
                description: item.description,
                price: item.price
            } as IProductFull;
        }));
    }
}