<template>
    <div>
        <div class="flex space-x-4">
            <div
                v-if="!classes.pending"
                class="flex"
            >
                <div class="mr-2">Тип класса:</div>
                <SelectField
                    v-model="classValue"
                    class="w-[200px] h-[20px] "
                    :options="classes.data"
                    placeholder="Все"
                />
            </div>
            <div
                v-if="!subjects.pending"
                class="flex"
            >
                <div class="mr-2">Предмет:</div>
                <SelectField
                    v-model="subjectValue"
                    class="w-[200px] h-[20px]"
                    :options="subjects.data"
                    placeholder="Все"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps, computed, watch } from 'vue';
import { isEqual } from 'lodash';

import SelectField from '@/UI/SelectField/SelectField.vue';

import useClassTypes from './hooks/useClassTypes';
import useSubjects from './hooks/useSubjects';
import { IProductFull } from '@/types/entries/product';
import Handler from './models/Handler';


interface IProps {
    modelValue: IProductFull[]
}

const props = defineProps<IProps>();
const emit = defineEmits(['update:modelValue']);

const localValue = ref([...props.modelValue]);


// HOOKS

const classes = useClassTypes();
const subjects = useSubjects();


// VALUES

const classValue = ref('');
const subjectValue = ref('');


// VALUE

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value: IProps['modelValue']) {
        emit('update:modelValue', value);
    }
});


// RESULT ARRAY

const resultArray = computed(() => {
    let handler = new Handler(
        localValue.value,
        classValue.value !== '' ? +classValue.value : undefined,
        subjectValue.value !== '' ? +subjectValue.value : undefined
    );

    handler.handleAll();

    return handler.items;
});

const resultArrayCached = computed(() => JSON.stringify(resultArray.value));

watch(() => resultArrayCached.value, () => {
    value.value = resultArray.value;
});

watch(() => props.modelValue, () => {
    if (!isEqual(props.modelValue, resultArray.value)) {
        localValue.value = [...props.modelValue];
    }
});
</script>