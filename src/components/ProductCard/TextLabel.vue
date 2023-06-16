<template>
    <div
        :style="`background-color: ${ color }`"
        class="p-1 inline-block rounded"
    >
       <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface IProps {
    color: string
}

const props = defineProps<IProps>();
</script>