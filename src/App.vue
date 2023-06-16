<template>
    <div class="min-h-[100vh] p-4 bg-[green] bg-opacity-20">
        <ProductsHandler
            v-if="products.fullyLoaded"
            class="mb-12"
            v-model="products.data"
        />
        <ProductsList
            v-if="!products.pending && products.data"
            :items="products.data"
            :fully-loaded="products.fullyLoaded"
        />
        <div v-else-if="products.pending">
            Загрузка данных
        </div>
        <div v-else>
            Ошибка
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProductsHandler from '@/modules/ProductsHandler/ProductsHandler.vue';
import ProductsList from '@/modules/ProductsList/ProductsList.vue';
import useProducts from '@/modules/ProductsList/hooks/useProducts';

const products = useProducts();
</script>
