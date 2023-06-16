<template>
    <div class="bg-white rounded p-2 space-y-3">
        <div class="font-semibold">
            {{ subjectName }} - {{ teacherName }}
        </div>
        <TextLabel :color="classTypeColor">
            {{ classTypeName }}
        </TextLabel>
        <div>
            {{ productPrice }} {{ productCurrency }}
        </div>
        <div>
            {{ description }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

import TextLabel from './TextLabel.vue';

interface IProps {
    subjectName: string
    teacherName: string
    productPrice: number
    productCurrency: string
    classTypeName: string
    classTypeColor: string
    description: string
}

const props = defineProps<IProps>();
</script>