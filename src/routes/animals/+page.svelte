<script lang="ts">
	import type { PageProps } from './$types';
	import Card from '$lib/components/Card.svelte';

	let { data }: PageProps = $props();
	// console.log(data);
</script>

<div class="content">
			{#each data.animals as item (item.id)}
				<Card {item} type="animals"/>
			{/each}
</div>

<style>
	.content {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px;
		/* justify-content: flex-start; */
		/* align-content:space-between; */
		align-content: flex-start;
		justify-content: space-evenly;
	}
</style>