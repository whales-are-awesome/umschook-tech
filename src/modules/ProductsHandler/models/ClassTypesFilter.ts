import { IProduct } from '@/types/entries/product';
import { IClassType } from '@/types/entries/classType';

class ClassTypesFilter {
    filter(items: IProduct[], classTypeId?: IClassType['id']) {
        return items.filter(item => item.class_type_id === classTypeId);
    }
}

export default ClassTypesFilter;