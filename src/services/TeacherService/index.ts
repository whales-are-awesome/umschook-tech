import API from '@/api';
import { ISubject } from '@/types/entries/subject';


class TeacherService {
    static sample = {
        fetch(id: number) {
            function raw() {
                return API.get<ISubject>('/api/teachers', id);
            }

            return {
                raw
            };
        }
    }

    static sampleItems = {
        fetch() {
            function raw() {
                return API.get<ISubject[]>('/api/teachers');
            }

            return {
                raw
            };
        }
    }
}

export default TeacherService;