<template>
    <div class="min-h-[100vh] p-4 bg-[green] bg-opacity-20">
        <ProductsHandler
            v-if="!products.pending"
            class="mb-12"
            v-model="products.data"
        />
        <ProductsList
            v-if="products.data"
            :items="!productsFull.pending ? productsFull.data : products.data"
            :fully-loaded="!productsFull.pending"
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
import useProducts from '@/hooks/useProducts';
import useFullProducts from '@/hooks/useFullProducts';

const [products] = useProducts();
const [productsFull] = useFullProducts(products);
</script>