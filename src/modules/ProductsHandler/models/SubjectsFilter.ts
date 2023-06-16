import { IProduct } from '@/types/entries/product';
import { ISubject } from '@/types/entries/subject';

class SubjectsFilter {
    filter(items: IProduct[], subjectId?: ISubject['id']) {
        return items.filter(item => item.subject_id === subjectId);
    }
}

export default SubjectsFilter;