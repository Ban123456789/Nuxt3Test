export default defineNuxtRouteMiddleware((to, from) => {
	console.log(to, from);
	console.log("check global middleware");
});
