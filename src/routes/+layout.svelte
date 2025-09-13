<script>
	import '../app.css';
</script>

<div class="min-h-dvh w-full bg-slate-50 dark:bg-slate-950 flex flex-col items-center">
	<div
		class="dark:text-slate-200 font-mono w-full lg:w-1/2 px-5 pt-5 pb-5 lg:px-0 text-md lg:text-3xl flex"
	>
		<a
			class="text-violet-500 dark:text-violet-300 hover:text-purple-400 hover:underline"
			href="https://dimeski.net"
			target="_blank">gjorgji@dimeski.net</a
		>

		<h1>:~/Gallery$</h1>
	</div>
	<div class="lg:w-1/2 w-full px-3 lg:px-0">
		<span class="text-slate-950 dark:text-slate-50 block w-full">
		I spend most of my time building apps and solving problems with code, but photography is where
			I slow down and notice the small details.
			<br class="mb-1" />

			This gallery is a mix of everyday life, light, and perspective, my way of capturing the same
			curiosity I bring into my work, but in a more visual, creative form.
			<br class="mb-1" />

			Learn more about me at
			<a
				href="https://dimeski.net"
				class="text-violet-500 dark:text-violet-300 hover:text-purple-400 hover:underline"
				>dimeski.net</a
			>.
		</span>
		<div class="h-6"></div>
		<slot />
	</div>
</div>
