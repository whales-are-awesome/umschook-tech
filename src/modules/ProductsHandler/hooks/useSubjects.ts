import { useFetchData } from '@/hooks/useFetchData';
import SubjectService from '@/services/SubjectService';
import { ISelectOption } from '@/services/SubjectService/types';

function useSubjects() {
    const subjects = useFetchData<ISelectOption[]>();

    async function fetchData() {
        const { data, error } = await SubjectService.sampleItems.fetch().asSelect();

        subjects.value.pending = true;

        if (!error) {
            subjects.value.data = data;
        } else {
            subjects.value.error = error;
        }

        subjects.value.pending = false;
    }

    fetchData();

    return subjects;
}

export default useSubjects;