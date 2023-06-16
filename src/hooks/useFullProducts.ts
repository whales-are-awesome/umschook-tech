import { computed, ref, Ref } from 'vue';
import { IProduct, IProductFull } from '@/types/entries/product';
import { ITeacher } from '@/types/entries/teacher';
import { ISubject } from '@/types/entries/subject';
import { IClassType } from '@/types/entries/classType';

import TeacherService from '@/services/TeacherService';
import SubjectService from '@/services/SubjectService';
import ClassTypeService from '@/services/ClassTypeService';
import { IFetchData } from '@/types/fetch';

interface IOtherInfo {
    teachers: Record<number, ITeacher>
    subjects: Record<number, ISubject>
    classTypes: Record<number, IClassType>
}

function useProducts(products: Ref<IFetchData<IProduct[]>>) {
    const isPending = ref(true);

    const info = ref<IOtherInfo>({
        teachers: {},
        subjects: {},
        classTypes: {}
    });

    const productsFull = computed<IFetchData<IProductFull[]>>(() => {
        return {
            data: products.value.data && !isPending.value
                ? products.value.data!.map(item => ({
                    ...item,
                    subject: info.value.subjects[item.subject_id],
                    teacher: info.value.teachers[item.teacher_id],
                    classType: info.value.classTypes[item.class_type_id],
                }))
                : [],
            pending: isPending.value
        }
    });


    fetchData();

    async function fetchData() {
        const { data: teachers } = await TeacherService.sampleItems.fetch().raw();
        const { data: subjects } = await SubjectService.sampleItems.fetch().raw();
        const { data: classTypes } = await ClassTypeService.sampleItems.fetch().raw();

        info.value = {
            teachers: Object.fromEntries(teachers!.map(item => [item.id, item])),
            subjects: Object.fromEntries(subjects!.map(item => [item.id, item])),
            classTypes: Object.fromEntries(classTypes!.map(item => [item.id, item])),
        };

        isPending.value = false;
    }

    return [productsFull];
}

export default useProducts;