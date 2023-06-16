import API from '@/api';
import { ISubject, ISelectOption } from './types';


class SubjectService {
    static sample = {
        fetch(id: number) {
            function raw() {
                return API.get<ISubject>('/api/subjects', id);
            }

            return {
                raw
            };
        }
    }

    static sampleItems = {
        fetch() {
            function raw() {
                return API.get<ISubject[]>('/api/subjects');
            }

            async function asSelect() {
                const { data, ...rest } = await raw();

                return {
                    data: data ? normalizeAsSelector(data) : null,
                    ...rest
                }
            }

            return {
                raw,
                asSelect
            };
        }
    }
}

function normalizeAsSelector(items: ISubject[]): ISelectOption[] {
    return items.map(item => ({
        title: item.name,
        value: item.id
    }))
}

export default SubjectService;