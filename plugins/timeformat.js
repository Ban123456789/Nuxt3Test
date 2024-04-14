export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.directive("timeformat", {
		mounted(el, binding) {
			const timestamp = binding.value;
			const format = new Date(timestamp);

			el.innerText = format;
		},
	});
});
