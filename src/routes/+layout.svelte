<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';	
	import "../app.css";
	
	import Header from './header.svelte';
	import Footer from './footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Layout -->
<div class="h-screen w-4xl border grid grid-col-[auto_1fr_auto] m-auto">
	<Header />

	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>

