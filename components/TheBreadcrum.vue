<script lang="ts" setup>
const items = useBreadcrumbItems() // uses the current route
</script>

<template>
    <nav aria-label="Breadcrumbs">
        <ul class="breadcrumbsList">
            <li v-for="(item, key) in items" :key="key">
                <NuxtLink class="inheritLink" v-bind="item">
                    {{ item.label }}
                </NuxtLink>
                <span v-if="key < items.length - 1" class="mR10 mL10">></span>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.breadcrumbsList {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    justify-content: center;
}
</style>