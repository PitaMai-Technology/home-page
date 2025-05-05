<script setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: null },
  image: { type: String, default: 'https://pitamai.com/ogp.png' },
  url: { type: String, default: null },  // オプションに変更
  type: { type: String, default: 'website' }
});

// 現在のURLを取得
const requestURL = useRequestURL();
// props.urlが指定されていればそれを使用し、なければ現在のURLを使用
const pageUrl = props.url || requestURL.href;

useHead({
  title: props.title,
  meta: [
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: props.image },
    { property: 'og:url', content: pageUrl },  // 動的URL
    { property: 'og:type', content: props.type },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
      { rel: "icon", href: "@/favicon.png" },
    ],
})
</script>

<template>
  <!-- HeadOGP -->
</template>