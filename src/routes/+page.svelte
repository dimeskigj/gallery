<script>
	import { lazyLoad } from '$lib/lazyLoad';

	export let data;
</script>

{#each data.filePaths as filepath}
	<img
		class="opacity-0 w-full mb-6 shadow-2xl hover:border-8 border-violet-500 cursor-pointer lg:rounded-md"
		alt={filepath.replaceAll('-', ' ').split('.')[0]}
		use:lazyLoad={`images/thumbnails/${filepath}`}
	/>
{/each}

<style>
	img {
		transition:
			all 500ms ease-in,
			border 200ms ease-in-out;
	}
</style>
