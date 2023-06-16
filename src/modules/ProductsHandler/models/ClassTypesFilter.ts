import { IProductFull } from '@/types/entries/product';
import { IClassType } from '@/types/entries/classType';

class ClassTypesFilter {
    sort(items: IProductFull[], classTypeId?: IClassType['id']) {
        return items.filter(item => item.classType.id === classTypeId);
    }
}

export default ClassTypesFilter;