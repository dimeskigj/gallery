<script>
	import '../app.css';
</script>

<div class="min-h-dvh w-full bg-slate-100 flex flex-col items-center">
	<div class="font-mono w-full lg:w-1/2 px-5 pt-5 pb-5 lg:px-0 text-xl lg:text-3xl flex">
		<a
			class="text-violet-500 hover:text-purple-400 hover:underline"
			href="https://dimeski.net"
			target="_blank">gjorgji@dimeski.net</a
		>
		<h1>:~/Gallery$</h1>
	</div>
	<div class="lg:w-1/2 w-full">
		<slot />
	</div>
</div>
