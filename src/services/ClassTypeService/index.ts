import API from '@/api';
import { ISubject, ISelectOption } from './types';


class SubjectService {
    static sampleItems = {
        fetch() {
            function raw() {
                return API.get('/api/subjects');
            }

            async function asSelect() {
                const { data, ...rest } = await raw();

                return {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
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