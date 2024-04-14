<template>
	<div>
		<StoreHeader></StoreHeader>
		<p>store.vue</p>
		<div>
			<p>number: {{ homeStore.count }}</p>
			<button @click="homeStore.add()">add</button>
		</div>
		<Box></Box>
		<StoreFooter></StoreFooter>
	</div>
</template>

<script setup>
const homeStore = useHomeStore();
</script>
