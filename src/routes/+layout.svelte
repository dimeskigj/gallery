<script>
	import '../app.css';
</script>

<div class="min-h-dvh w-full bg-slate-100 dark:bg-slate-900 flex flex-col items-center">
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
		<slot />
	</div>
</div>
