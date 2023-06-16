<template>
    <div class="">
        <select
            class="w-full"
            v-bind="$attrs"
            v-model="value"
        >
            <option
                v-if="placeholder"
                selected
                :value="''"
            >
                {{ placeholder }}
            </option>
            <option
                v-for="(option, index) in options"
                :key="index"
                :value="option.value"
            >
                {{ option.title }}
            </option>
        </select>
    </div>
</template>

<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';
import { IOption } from './types'


// META

interface IProps {
    modelValue: any
    options: IOption[]
    placeholder?: string
}

// interface IEmits {
//     'update:modelValue': () => IProps['modelValue']
// }

const props = defineProps<IProps>();
const emit = defineEmits(['update:modelValue']);


// VALUE

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value: IProps['modelValue']) {
        emit('update:modelValue', value);
    }
});
</script>