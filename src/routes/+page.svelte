<script>
	import { lazyLoad } from '$lib/lazyLoad';
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	export let data;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#gallery',
			children: 'a',
			mainClass: 'pswp--custom-bg',
			pswpModule: () => import('photoswipe')
		});

		lightbox.init();
	});
</script>

<div id="gallery">
	{#each data.images as image}
		<a
			href={`images/thumbnails/${image.src}`}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<img
				class="opacity-0 w-full mb-6 shadow-xl hover:border-8 border-violet-500 cursor-pointer lg:rounded-md"
				alt={image.alt}
				use:lazyLoad={`images/thumbnails/${image.src}`}
			/>
		</a>
	{/each}
</div>

<style>
	img {
		transition:
			all 500ms ease-in,
			border 200ms ease-in-out;
	}

	:global(.pswp--custom-bg) {
		--pswp-bg: rgb(15 23 42);
	}
</style>
