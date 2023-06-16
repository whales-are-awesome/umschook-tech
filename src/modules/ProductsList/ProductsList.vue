<template>
    <div
        class="flex flex-wrap -mx-2 -mt-4"
    >
        <div
            v-for="(product, index) in items"
            :key="index"
            class="w-1/3 px-2 mt-4 flex"
        >
            <ProductCard
                v-if="fullyLoaded"
                class="w-full"
                :subject-name="product.subject.name"
                :teacher-name="product.teacher.name"
                :product-price="product.price.amount"
                :product-currency="product.price.currency"
                :class-type-name="product.classType.name"
                :class-type-color="product.classType.color"
                :description="product.description"
            />
            <ProductCardSkeleton
                v-else
                class="w-full h-[300px]"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import ProductCard from '@/components/ProductCard/ProductCard.vue';
import ProductCardSkeleton from '@/components/ProductCard/ProductCardSkeleton.vue';
import { IProductFull, IProduct } from '@/types/entries/product';

interface IProps {
    items: IProduct[] | IProductFull[]
    fullyLoaded: boolean
}

defineProps<IProps>();
</script>