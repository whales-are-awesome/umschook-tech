import API from '@/api';


class TeacherService {
    static sample = {
        fetch(id: number) {
            function raw() {
                return API.get('/api/teachers', id);
            }

            return {
                raw
            };
        }
    }

    static sampleItems = {
        fetch() {
            function raw() {
                return API.get('/api/teachers');
            }

            return {
                raw
            };
        }
    }
}

export default SubjectService;