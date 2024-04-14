export const useAddCount = () => {
	const count = ref(0);

	function addCount() {
		count.value++;
	}

	return {
		count,
		addCount,
	};
};
