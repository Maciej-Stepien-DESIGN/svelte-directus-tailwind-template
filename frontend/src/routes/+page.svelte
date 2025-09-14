<script lang="ts">
	let toggle = $state(false);
	let { data } = $props();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex gap-4">
	<!-- Directus test  -->
	<div>
		<span>Directus test data: </span>
		{JSON.stringify(data)}
		<div></div>
	</div>
	<!-- Colors Test -->
	<div class="flex space-x-4">
		<div class="h-16 w-16 rounded bg-red-500"></div>
		<div class="h-16 w-16 rounded bg-green-500"></div>
		<div class="h-16 w-16 rounded bg-blue-500"></div>
		<div class="h-16 w-16 rounded bg-yellow-500"></div>
	</div>

	<!-- Animation Test -->
	<div class="relative h-32 w-32"> 
		<div
			class={`h-16 w-16 rounded-full bg-purple-500 transition-transform duration-500 ${toggle ? 'translate-x-20' : ''}`}
		></div>
		<button
			class="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
			onclick={() => (toggle = !toggle)}
		>
			Toggle circle
		</button>
	</div>

	<!-- Spin Animation Test -->
	<span>Spin test</span>
	<div class="mt-4 h-16 w-16 animate-spin rounded-xs bg-pink-500"></div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
