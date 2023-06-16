<template>
    <div>
        <div class="flex space-x-4">
            <div class="flex">
                <div class="mr-2">Тип класса:</div>
                <SelectField
                    v-model="classesValue"
                    class="w-[200px] h-[20px] "
                    :options="classes"
                    placeholder="Все"
                />
            </div>
            <div class="flex">
                <div class="mr-2">Предмет:</div>
                <SelectField
                    v-model="classesValue"
                    class="w-[200px] h-[20px] "
                    :options="classes"
                    placeholder="Все"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SelectField from '@/UI/SelectField/SelectField.vue';

const classes = [
    { title: 'Some', value: 1 },
    { title: 'Some', value: 2 },
    { title: 'Some', value: 3 },
];

const classesValue = ref('')
</script>