<template>
	<div>user.vue</div>
</template>

<script setup>
// useHead({
// 	title: "useruser",
// 	meta: [
// 		{ property: "og:title", content: "關於我們 About - Nuxt3 高效入門全攻略" },
// 		{ property: "og:url", content: "http://localhost:3000/about" },
// 		{ property: "og:image", content: "http://localhost:3000/share.jpg" },
// 		{ name: "description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
// 		{ property: "og:description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
// 	],
// });

// useSeoMeta({
// 	title: "About - Nuxt3 高效入門全攻略",
// 	description: "關於我們 - 最棒的Nuxt3的線上課程",
// 	ogDescription: "關於我們 - 最棒的Nuxt3的線上課程",
// 	ogTitle: "About - Nuxt3 高效入門全攻略",
// 	ogImage: "",
// 	twitterCard: "summary_large_image",
// 	twitterSite: "",
// 	twitterCreator: "",
// });

const res = await useFetch("https://vue-lessons-api.vercel.app/seo/about").then(res => res);
useServerSeoMeta({
	title: () => `${res.data.value.title} - Nuxt3`,
	ogTitle: () => `${res.data.value.title} - Nuxt3`,
	description: () => `${res.data.value.description} - Nuxt3`,
	ogDescription: () => `${res.data.value.description} - Nuxt3`,
});

// useSeoMeta({
// 	title: "123",
// });

definePageMeta({
	// middleware: (to, from) => {
	// 	console.log(to, from);
	// },
	middleware: ["auth"],
});
</script>
