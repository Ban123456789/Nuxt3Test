<template>
	<div>
		<p>Box 組合元件</p>
		<p>count: {{ homeStore.count }}</p>
		<BoxBtn></BoxBtn>
		<BoxLink></BoxLink>
	</div>
</template>

<script setup>
const homeStore = useHomeStore();
</script>
