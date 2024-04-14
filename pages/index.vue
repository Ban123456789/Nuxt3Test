<template>
	<div>
		<p>index.vue</p>
		<client-only>
			<p>{{ $hello("Ben") }}</p>
		</client-only>
		<p v-timeformat="1704038400000"></p>
		<VDatePicker v-model="selectedDate" />
		<nuxt-link to="/user">nuxt link to user</nuxt-link>
		<a href="/user">a link to user</a>
		<NuxtPage />
	</div>
</template>

<script setup>
const { $hello } = useNuxtApp();
const selectedDate = ref(new Date());
</script>
