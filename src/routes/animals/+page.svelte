<script lang="ts">
	import type { PageProps } from './$types';
	import Card from '$lib/components/Card.svelte';

	let { data }: PageProps = $props();
	// console.log(data);
</script>

<div class="content">
			{#each data.animals as item (item.id)}
				<Card {item} />
			{/each}
</div>
