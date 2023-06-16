import { IProductFull } from '@/types/entries/product';
import { ISubject } from '@/types/entries/subject';

class SubjectsFilter {
    sort(items: IProductFull[], subjectId?: ISubject['id']) {
        return items.filter(item => item.subject.id === subjectId);
    }
}

export default SubjectsFilter;