<script lang="ts">
	import { page } from "./store";

	import Menu from "./Menu.svelte";
	import { Pages } from "./types";
	import Home from "./Home.svelte";
import Emotion from "./Emotion.svelte";

	let page_value
	page.subscribe(value => {
		page_value = value;
	})

</script>

<main>
	<Menu />
	<div class='content'>
		{#if page_value === Pages.HOME}
			<Home />
		{:else if page_value === Pages.EMOTION}
			<Emotion />
		{:else}
			<Home />
		{/if}
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		text-align: center;
		margin: 0 auto;
	}

	.content {
		display: flex;
		/* flex: 1; */

    justify-content: center;

		margin: 3em 1em;
    /* align-items: center; */
	}
</style>