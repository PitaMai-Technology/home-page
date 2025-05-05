<script setup>
useHead({
    link: [
        { rel: "icon", href: "/favicon.png" },
    ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  filter: blur(1rem);
}

</style>