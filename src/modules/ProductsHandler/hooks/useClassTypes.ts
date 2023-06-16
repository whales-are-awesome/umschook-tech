import { useFetchData } from '@/hooks/useFetchData';
import ClassTypeService from '@/services/ClassTypeService';
import { ISelectOption } from '@/services/ClassTypeService/types';

function useClassTypes() {
    const classTypes = useFetchData<ISelectOption[]>();

    async function fetchData() {
        const { data, error } = await ClassTypeService.sampleItems.fetch().asSelect();

        classTypes.value.pending = true;

        if (data) {
            classTypes.value.data = data;
        } else {
            classTypes.value.error = error;
        }

        classTypes.value.pending = false;
    }

    fetchData();

    return classTypes;
}

export default useClassTypes;