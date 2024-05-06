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

<div id="gallery" class="columns-2 lg:columns-3 gap-3 lg:gap-4 mb-10">
	{#each data.images as image}
		<a
			href={image.src}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<img
				class="opacity-0 h-auto w-full mb-3 lg:mb-6 shadow-xl hover:border-4 border-violet-500 cursor-pointer rounded-md"
				alt={image.alt}
				width={image.thumbWidth}
				height={image.thumbHeight}
				use:lazyLoad={image.thumbSrc}
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
