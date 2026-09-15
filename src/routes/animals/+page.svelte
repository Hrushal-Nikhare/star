<script lang="ts">
	import type { PageProps } from './$types';
	import Card from '$lib/components/Card.svelte';

	let { data }: PageProps = $props();
</script>

{#each data.animals as item (item.name)}
	<Card {item} />
{/each}
