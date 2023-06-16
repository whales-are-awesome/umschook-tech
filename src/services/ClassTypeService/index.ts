import API from '@/api';
import { IClassType, ISelectOption } from './types';


class SubjectService {
    static sample = {
        fetch(id: number) {
            function raw() {
                return API.get<IClassType>('/api/class-types', id);
            }

            return {
                raw
            };
        }
    }

    static sampleItems = {
        fetch() {
            function raw() {
                return API.get<IClassType[]>('/api/class-types');
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

function normalizeAsSelector(items: IClassType[]): ISelectOption[] {
    return items.map(item => ({
        title: item.name,
        value: item.id
    }))
}

export default SubjectService;